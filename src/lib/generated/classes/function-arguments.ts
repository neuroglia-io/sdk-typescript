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
 * Represents the intersection between the FunctionArguments class and type
 */
export type FunctionArgumentsIntersection = FunctionArguments & Specification.FunctionArguments;

/**
 * Represents a constructor for the intersection of the FunctionArguments class and type
 */
export interface FunctionArgumentsConstructor {
  new (model?: Partial<Specification.FunctionArguments>): FunctionArgumentsIntersection;
}

/**
 * Represents a FunctionArguments with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class FunctionArguments extends ObjectHydrator<Specification.FunctionArguments> {
  /**
   * Instanciates a new instance of the FunctionArguments class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the FunctionArguments.
   */
  constructor(model?: Partial<Specification.FunctionArguments>) {
    super(model);

    getLifecycleHooks('FunctionArguments')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the FunctionArguments.
   * Throws if invalid.
   */
  validate(workflow?: Partial<Specification.Workflow>) {
    const copy = new FunctionArguments(this as any) as FunctionArgumentsIntersection;
    validate('FunctionArguments', copy, workflow);
  }

  /**
   * Normalizes the current instance of the FunctionArguments.
   * Creates a copy of the FunctionArguments, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the FunctionArguments instance.
   */
  normalize(): FunctionArguments & Specification.FunctionArguments {
    const copy = new FunctionArguments(this as any) as FunctionArgumentsIntersection;
    return getLifecycleHooks('FunctionArguments')?.normalize?.(copy) || copy;
  }
}

export const _FunctionArguments = FunctionArguments as FunctionArgumentsConstructor;
