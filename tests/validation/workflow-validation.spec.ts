/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * oUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { Classes } from '../../src/lib/generated/classes';
import { validate } from '../../src/lib/validation';

import { schemaVersion } from '../../package.json';

describe('Workflow validation', () => {
  it('should be valid', () => {
    const workflow = new Classes.Workflow({
      document: {
        dsl: schemaVersion,
        name: 'test',
        version: '1.0.0',
        namespace: 'default',
      },
      do: [
        {
          step1: {
            set: {
              foo: 'bar',
            },
          },
        },
      ],
    });
    const test = () => validate('Workflow', workflow);
    expect(test).not.toThrow(Error);
  });

  it('should throw when invalid', () => {
    const workflow = new Classes.Workflow({
      document: {
        dsl: schemaVersion,
        name: 'test',
        version: '1.0.0',
        namespace: 'default',
      },
    });
    const test = () => validate('Workflow', workflow);
    expect(test).toThrow(Error);
    expect(test).toThrow(/'Workflow' is invalid/);
  });

  it('should throw with incompatible DSL version', () => {
    const oldVersion = '0.9';
    const workflow = new Classes.Workflow({
      document: {
        dsl: oldVersion,
        name: 'test',
        version: '1.0.0',
        namespace: 'default',
      },
    });
    expect(() => workflow.validate()).toThrow(
      `The DSL version of the workflow '${oldVersion}' doesn't match the supported version of the SDK '${schemaVersion}'.`,
    );
  });
});
