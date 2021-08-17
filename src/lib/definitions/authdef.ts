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
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { normalizeScheme, overwritePropertiesIfObject } from './utils';
import { Properties } from './types';

export class Authdef {
  constructor(model: any) {
    const defaultModel = { scheme: 'basic' };
    Object.assign(this, defaultModel, model);

    overwritePropertiesIfObject(this);
  }
  /**
   * Unique auth definition name
   */
  name: string;
  /**
   * Defines the auth type
   */
  scheme?: 'basic' | 'bearer' | 'oauth2';
  properties: string | Properties;

  /**
   * Normalize the value of each property by recursively deleting properties whose value is equal to its default value. Does not modify the object state.
   * @returns {Specification.Authdef} without deleted properties.
   */
  normalize = (): Authdef => {
    const clone = new Authdef(this);

    normalizeScheme(clone);

    return clone;
  };
}
