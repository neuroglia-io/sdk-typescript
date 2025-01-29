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
 * Represents the intersection between the HTTPQuery class and type
 */
export type HTTPQueryIntersection = HTTPQuery & Specification.HTTPQuery;

/**
 * Represents a constructor for the intersection of the HTTPQuery class and type
 */
export interface HTTPQueryConstructor {
  new (model?: Partial<Specification.HTTPQuery>): HTTPQueryIntersection;
}

/**
 * Represents a HTTPQuery with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class HTTPQuery extends ObjectHydrator<Specification.HTTPQuery> {
  /**
   * Instanciates a new instance of the HTTPQuery class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the HTTPQuery.
   */
  constructor(model?: Partial<Specification.HTTPQuery>) {
    super(model);

    getLifecycleHooks('HTTPQuery')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the HTTPQuery.
   * Throws if invalid.
   */
  validate(workflow?: Partial<Specification.Workflow>) {
    const copy = new HTTPQuery(this as any) as HTTPQueryIntersection;
    validate('HTTPQuery', copy, workflow);
  }

  /**
   * Normalizes the current instance of the HTTPQuery.
   * Creates a copy of the HTTPQuery, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the HTTPQuery instance.
   */
  normalize(): HTTPQuery & Specification.HTTPQuery {
    const copy = new HTTPQuery(this as any) as HTTPQueryIntersection;
    return getLifecycleHooks('HTTPQuery')?.normalize?.(copy) || copy;
  }
}

export const _HTTPQuery = HTTPQuery as HTTPQueryConstructor;
