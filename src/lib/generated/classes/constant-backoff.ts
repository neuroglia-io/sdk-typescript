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
 * Represents the intersection between the ConstantBackoff class and type
 */
export type ConstantBackoffIntersection = ConstantBackoff & Specification.ConstantBackoff;

/**
 * Represents a constructor for the intersection of the ConstantBackoff class and type
 */
export interface ConstantBackoffConstructor {
  new (model?: Partial<Specification.ConstantBackoff>): ConstantBackoffIntersection;
}

/**
 * Represents a ConstantBackoff with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class ConstantBackoff extends ObjectHydrator<Specification.ConstantBackoff> {
  /**
   * Instanciates a new instance of the ConstantBackoff class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the ConstantBackoff.
   */
  constructor(model?: Partial<Specification.ConstantBackoff>) {
    super(model);

    getLifecycleHooks('ConstantBackoff')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the ConstantBackoff.
   * Throws if invalid.
   */
  validate(workflow?: Partial<Specification.Workflow>) {
    const copy = new ConstantBackoff(this as any) as ConstantBackoffIntersection;
    validate('ConstantBackoff', copy, workflow);
  }

  /**
   * Normalizes the current instance of the ConstantBackoff.
   * Creates a copy of the ConstantBackoff, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the ConstantBackoff instance.
   */
  normalize(): ConstantBackoff & Specification.ConstantBackoff {
    const copy = new ConstantBackoff(this as any) as ConstantBackoffIntersection;
    return getLifecycleHooks('ConstantBackoff')?.normalize?.(copy) || copy;
  }
}

export const _ConstantBackoff = ConstantBackoff as ConstantBackoffConstructor;
