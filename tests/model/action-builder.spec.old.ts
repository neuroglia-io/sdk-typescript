/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { ActionBuilder, ActionDataFilter, EventRef } from '../../src';
import { ActionDataFilterBuilder } from '../../src/model/action-data-filter.builder';

describe('ActionBuilder', () => {
  it('should throws an error if mandatory fields are not set ', () => {
    expect(() => new ActionBuilder().build()).toThrowError();

    expect(() => new ActionBuilder().withFunctionRef('').build()).toThrowError();
  });

  it('should throws an error if both functionRef and eventRef are set', () => {
    expect(() => new ActionBuilder().build()).toThrowError();

    expect(() =>
      new ActionBuilder().withFunctionRef('functionRef').withEventRef(validEventRef()).build()
    ).toThrowError();
  });

  it('should generate a populated object', () => {
    expect(
      new ActionBuilder()
        .withName('actionName')
        .withEventRef(validEventRef())
        .withTimeOut('PT1H')
        .withActionDataFilter(new ActionDataFilterBuilder().build())
        .build()
    ).toEqual({
      name: 'actionName',
      eventRef: validEventRef(),
      timeout: 'PT1H',
      actionDataFilter: validActionDataFilter(),
    });
  });
});

function validActionDataFilter(): ActionDataFilter {
  return {};
}

function validEventRef(): EventRef {
  return { resultEventRef: 'result' };
}
