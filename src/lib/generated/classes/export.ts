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

import { ObjectHydrator } from '../../hydrator';
import { Specification } from '../definitions';
import { getLifecycleHook } from '../../lifecycle-hooks';
import { validate } from '../../validation';
import { deepCopy } from '../../utils';

class Export extends ObjectHydrator<Specification.Export> {
  constructor(model?: Partial<Specification.Export>) {
    super(model);

    getLifecycleHook('Export')?.constructor?.(this);
  }

  validate() {
    const copy = new Export(this as any) as Export & Specification.Export;
    getLifecycleHook('Export')?.preValidation?.(copy);
    validate('Export', deepCopy(copy)); // deepCopy prevents potential additional properties error for constructor, validate, normalize
    getLifecycleHook('Export')?.postValidation?.(copy);
  }

  normalize(): Export & Specification.Export {
    const copy = new Export(this as any) as Export & Specification.Export;
    return getLifecycleHook('Export')?.normalize?.(copy) || copy;
  }
}

export const _Export = Export as {
  new (model?: Partial<Specification.Export>): Export & Specification.Export;
};
