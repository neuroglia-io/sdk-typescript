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

import { _EventConsumptionStrategyAll } from './event-consumption-strategy-all';
import { _EventConsumptionStrategyAny } from './event-consumption-strategy-any';
import { _EventFilter } from './event-filter';
import { ObjectHydrator } from '../../hydrator';
import { Specification } from '../definitions';
import { getLifecycleHook } from '../../lifecycle-hooks';
import { validate } from '../../validation';
import { deepCopy, isObject } from '../../utils';

class EventConsumptionStrategy extends ObjectHydrator<Specification.EventConsumptionStrategy> {
  constructor(model?: Partial<Specification.EventConsumptionStrategy>) {
    super(model);
    const self = this as unknown as Specification.EventConsumptionStrategy & object;
    if (isObject(model)) {
      if (typeof model.all === 'object')
        self.all = new _EventConsumptionStrategyAll(model.all as Specification.EventConsumptionStrategyAll);
      if (typeof model.any === 'object')
        self.any = new _EventConsumptionStrategyAny(model.any as Specification.EventConsumptionStrategyAny);
      if (typeof model.one === 'object') self.one = new _EventFilter(model.one as Specification.EventFilter);
    }
    getLifecycleHook('EventConsumptionStrategy')?.constructor?.(this);
  }

  validate() {
    const copy = new EventConsumptionStrategy(this as any) as EventConsumptionStrategy &
      Specification.EventConsumptionStrategy;
    getLifecycleHook('EventConsumptionStrategy')?.preValidation?.(copy);
    validate('EventConsumptionStrategy', deepCopy(copy)); // deepCopy prevents potential additional properties error for constructor, validate, normalize
    getLifecycleHook('EventConsumptionStrategy')?.postValidation?.(copy);
  }

  normalize(): EventConsumptionStrategy & Specification.EventConsumptionStrategy {
    const copy = new EventConsumptionStrategy(this as any) as EventConsumptionStrategy &
      Specification.EventConsumptionStrategy;
    return getLifecycleHook('EventConsumptionStrategy')?.normalize?.(copy) || copy;
  }
}

export const _EventConsumptionStrategy = EventConsumptionStrategy as {
  new (
    model?: Partial<Specification.EventConsumptionStrategy>,
  ): EventConsumptionStrategy & Specification.EventConsumptionStrategy;
};
