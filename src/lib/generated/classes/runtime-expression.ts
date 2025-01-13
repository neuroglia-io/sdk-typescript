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
 * Represents the intersection between the RuntimeExpression class and type
 */
export type RuntimeExpressionIntersection = RuntimeExpression & Specification.RuntimeExpression;

/**
 * Represents a constructor for the intersection of the RuntimeExpression class and type
 */
export interface RuntimeExpressionConstructor {
  new (model?: Partial<Specification.RuntimeExpression>): RuntimeExpressionIntersection;
}

/**
 * Represents a RuntimeExpression with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class RuntimeExpression extends ObjectHydrator<Specification.RuntimeExpression> {
  /**
   * Instanciates a new instance of the RuntimeExpression class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the RuntimeExpression.
   */
  constructor(model?: Partial<Specification.RuntimeExpression>) {
    super(model);

    getLifecycleHooks('RuntimeExpression')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the RuntimeExpression.
   * Throws if invalid.
   */
  validate(workflow?: Partial<Specification.Workflow>) {
    const copy = new RuntimeExpression(this as any) as RuntimeExpressionIntersection;
    validate('RuntimeExpression', copy, workflow);
  }

  /**
   * Normalizes the current instance of the RuntimeExpression.
   * Creates a copy of the RuntimeExpression, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the RuntimeExpression instance.
   */
  normalize(): RuntimeExpression & Specification.RuntimeExpression {
    const copy = new RuntimeExpression(this as any) as RuntimeExpressionIntersection;
    return getLifecycleHooks('RuntimeExpression')?.normalize?.(copy) || copy;
  }
}

export const _RuntimeExpression = RuntimeExpression as RuntimeExpressionConstructor;
