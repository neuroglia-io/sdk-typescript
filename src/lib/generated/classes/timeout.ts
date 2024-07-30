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

/*****************************************************************************************
 *
 * /!\ This file is computer generated. Any manual modification can and will be lost. /!\
 *
 *****************************************************************************************/

import { _Duration } from './duration';
import { ObjectHydrator } from '../../hydrator';
import { Specification } from '../definitions';
import { getLifecycleHook } from '../../lifecycle-hooks';
import { validate } from '../../validation';
import { deepCopy, isObject } from '../../utils';

class Timeout extends ObjectHydrator<Specification.Timeout> {
  constructor(model?: Partial<Specification.Timeout>) {
    super(model);
    const self = this as unknown as Specification.Timeout & object;
    if (isObject(model)) {
      if (typeof model.after === 'object') self.after = new _Duration(model.after);
    }
    getLifecycleHook('Timeout')?.constructor?.(this);
  }

  validate() {
    const copy = new Timeout(this as any) as Timeout & Specification.Timeout;
    getLifecycleHook('Timeout')?.preValidation?.(copy);
    validate('Timeout', deepCopy(copy)); // deepCopy prevents potential additional properties error for constructor, validate, normalize
    getLifecycleHook('Timeout')?.postValidation?.(copy);
  }

  normalize(): Timeout & Specification.Timeout {
    const copy = new Timeout(this as any) as Timeout & Specification.Timeout;
    return getLifecycleHook('Timeout')?.normalize?.(copy) || copy;
  }
}

export const _Timeout = Timeout as {
  new (model?: Partial<Specification.Timeout>): Timeout & Specification.Timeout;
};
