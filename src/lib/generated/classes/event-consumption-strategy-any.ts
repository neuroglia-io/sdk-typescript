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

import { _EventFilter } from './event-filter';
import { Specification } from '../definitions';
import { ArrayHydrator } from '../../hydrator';
import { getLifecycleHook } from '../../lifecycle-hooks';
import { validate } from '../../validation';
import { deepCopy } from '../../utils';

class EventConsumptionStrategyAny extends ArrayHydrator<Specification.EventFilter> {
  constructor(model?: Array<Specification.EventFilter> | number) {
    super(model);
    if (Array.isArray(model)) {
      if (model?.length) {
        this.splice(0, this.length);
        model.forEach((item) => this.push(new _EventFilter(item)));
      }
    }
    Object.setPrototypeOf(this, Object.create(EventConsumptionStrategyAny.prototype));
    getLifecycleHook('EventConsumptionStrategyAny')?.constructor?.(this);
  }

  validate() {
    const copy = new EventConsumptionStrategyAny(this);
    getLifecycleHook('EventConsumptionStrategyAny')?.preValidation?.(copy);
    validate('EventConsumptionStrategyAny', deepCopy(copy)); // deepCopy prevents potential additional properties error for constructor, validate, normalize
    getLifecycleHook('EventConsumptionStrategyAny')?.postValidation?.(copy);
  }

  normalize(): EventConsumptionStrategyAny {
    const copy = new EventConsumptionStrategyAny(this);
    return getLifecycleHook('EventConsumptionStrategyAny')?.normalize?.(copy) || copy;
  }
}

export const _EventConsumptionStrategyAny = EventConsumptionStrategyAny; // could be exported directly, but it makes the job of building the index more straightforward as it's consistant with "object" classes
