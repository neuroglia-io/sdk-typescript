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
import { getLifecycleHooks } from '../../lifecycle-hooks';
import { validate } from '../../validation';

/**
 * Represents a collection of Specification.EventFilter.
 * Inherits from ArrayHydrator to handle array-specific hydration.
 */
export class EventConsumptionStrategyAny extends ArrayHydrator<Specification.EventFilter> {
  /**
   * Constructs a new instance of the EventConsumptionStrategyAny class.
   *
   * @param model - Optional parameter which can be an array of objects or a number representing the array length.
   */
  constructor(model?: Array<Specification.EventFilter> | number) {
    super(model);
    if (Array.isArray(model)) {
      if (model?.length) {
        this.splice(0, this.length);
        model.forEach((item) => this.push(new _EventFilter(item)));
      }
    }
    Object.setPrototypeOf(this, Object.create(EventConsumptionStrategyAny.prototype));
    getLifecycleHooks('EventConsumptionStrategyAny')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the EventConsumptionStrategyAny.
   * Throws if invalid.
   */
  validate() {
    const copy = new EventConsumptionStrategyAny(this);
    validate('EventConsumptionStrategyAny', copy);
  }

  /**
   * Normalizes the current instance of the EventConsumptionStrategyAny.
   * Creates a copy of the EventConsumptionStrategyAny, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the EventConsumptionStrategyAny instance.
   */
  normalize(): EventConsumptionStrategyAny {
    const copy = new EventConsumptionStrategyAny(this);
    return getLifecycleHooks('EventConsumptionStrategyAny')?.normalize?.(copy) || copy;
  }
}

export const _EventConsumptionStrategyAny = EventConsumptionStrategyAny; // could be exported directly, but it makes the job of building the index more straightforward as it's consistant with "object" classes
