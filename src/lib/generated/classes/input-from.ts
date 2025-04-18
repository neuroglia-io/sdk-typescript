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
 * Represents the intersection between the InputFrom class and type
 */
export type InputFromIntersection = InputFrom & Specification.InputFrom;

/**
 * Represents a constructor for the intersection of the InputFrom class and type
 */
export interface InputFromConstructor {
  new (model?: Partial<Specification.InputFrom>): InputFromIntersection;
}

/**
 * Represents a InputFrom with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class InputFrom extends ObjectHydrator<Specification.InputFrom> {
  /**
   * Instanciates a new instance of the InputFrom class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the InputFrom.
   */
  constructor(model?: Partial<Specification.InputFrom>) {
    super(model);

    getLifecycleHooks('InputFrom')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the InputFrom.
   * Throws if invalid.
   */
  validate(workflow?: Partial<Specification.Workflow>) {
    const copy = new InputFrom(this as any) as InputFromIntersection;
    validate('InputFrom', copy, workflow);
  }

  /**
   * Normalizes the current instance of the InputFrom.
   * Creates a copy of the InputFrom, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the InputFrom instance.
   */
  normalize(): InputFrom & Specification.InputFrom {
    const copy = new InputFrom(this as any) as InputFromIntersection;
    return getLifecycleHooks('InputFrom')?.normalize?.(copy) || copy;
  }
}

export const _InputFrom = InputFrom as InputFromConstructor;
