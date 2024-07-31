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
 * Represents the intersection between the SetTaskSet class and type
 */
export type SetTaskSetIntersection = SetTaskSet & Specification.SetTaskSet;

/**
 * Represents a constructor for the intersection of the SetTaskSet class and type
 */
export interface SetTaskSetConstructor {
  new (model?: Partial<Specification.SetTaskSet>): SetTaskSetIntersection;
}

/**
 * Represents a SetTaskSet with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class SetTaskSet extends ObjectHydrator<Specification.SetTaskSet> {
  /**
   * Instanciates a new instance of the SetTaskSet class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the SetTaskSet.
   */
  constructor(model?: Partial<Specification.SetTaskSet>) {
    super(model);

    getLifecycleHooks('SetTaskSet')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the SetTaskSet.
   * Throws if invalid.
   */
  validate() {
    const copy = new SetTaskSet(this as any) as SetTaskSetIntersection;
    validate('SetTaskSet', copy);
  }

  /**
   * Normalizes the current instance of the SetTaskSet.
   * Creates a copy of the SetTaskSet, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the SetTaskSet instance.
   */
  normalize(): SetTaskSet & Specification.SetTaskSet {
    const copy = new SetTaskSet(this as any) as SetTaskSetIntersection;
    return getLifecycleHooks('SetTaskSet')?.normalize?.(copy) || copy;
  }
}

export const _SetTaskSet = SetTaskSet as SetTaskSetConstructor;
