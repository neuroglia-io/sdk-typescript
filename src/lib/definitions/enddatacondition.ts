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
import { End } from './end';
import { Metadata } from './metadata';
import { overwriteEndValueIfObject, overwriteMetadataValue } from './utils';

export class Enddatacondition {
  constructor(model: any) {
    Object.assign(this, model);

    overwriteMetadataValue(this);
    overwriteEndValueIfObject(this);
  }

  /**
   * Data condition name
   */
  name?: string;
  /**
   * Workflow expression evaluated against state data. Must evaluate to true or false
   */
  condition: string;
  /**
   * Workflow end definition
   */
  end: boolean | End;
  metadata?: /* Metadata information */ Metadata;
}
