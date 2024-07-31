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
import { getLifecycleHooks } from '../../lifecycle-hooks';
import { validate } from '../../validation';

/**
 * Represents the intersection between the Duration class and type
 */
export type DurationIntersection = Duration & Specification.Duration;

/**
 * Represents a constructor for the intersection of the Duration class and type
 */
export interface DurationConstructor {
  new (model?: Partial<Specification.Duration>): DurationIntersection;
}

/**
 * Represents a Duration with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class Duration extends ObjectHydrator<Specification.Duration> {
  /**
   * Instanciates a new instance of the Duration class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the Duration.
   */
  constructor(model?: Partial<Specification.Duration>) {
    super(model);

    getLifecycleHooks('Duration')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the Duration.
   * Throws if invalid.
   */
  validate() {
    const copy = new Duration(this as any) as DurationIntersection;
    validate('Duration', copy);
  }

  /**
   * Normalizes the current instance of the Duration.
   * Creates a copy of the Duration, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the Duration instance.
   */
  normalize(): Duration & Specification.Duration {
    const copy = new Duration(this as any) as DurationIntersection;
    return getLifecycleHooks('Duration')?.normalize?.(copy) || copy;
  }
}

export const _Duration = Duration as DurationConstructor;
