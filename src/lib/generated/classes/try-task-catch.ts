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

import { _CatchErrors } from './catch-errors';
import { _TryTaskCatchRetry } from './try-task-catch-retry';
import { _TaskList } from './task-list';
import { ObjectHydrator } from '../../hydrator';
import { Specification } from '../definitions';
import { getLifecycleHooks } from '../../lifecycle-hooks';
import { validate } from '../../validation';
import { isObject } from '../../utils';

/**
 * Represents the intersection between the TryTaskCatch class and type
 */
export type TryTaskCatchIntersection = TryTaskCatch & Specification.TryTaskCatch;

/**
 * Represents a constructor for the intersection of the TryTaskCatch class and type
 */
export interface TryTaskCatchConstructor {
  new (model?: Partial<Specification.TryTaskCatch>): TryTaskCatchIntersection;
}

/**
 * Represents a TryTaskCatch with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class TryTaskCatch extends ObjectHydrator<Specification.TryTaskCatch> {
  /**
   * Instanciates a new instance of the TryTaskCatch class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the TryTaskCatch.
   */
  constructor(model?: Partial<Specification.TryTaskCatch>) {
    super(model);
    const self = this as unknown as Specification.TryTaskCatch & object;
    if (isObject(model)) {
      if (typeof model.errors === 'object') self.errors = new _CatchErrors(model.errors);
      if (typeof model.retry === 'object') self.retry = new _TryTaskCatchRetry(model.retry);
      if (typeof model.do === 'object') self.do = new _TaskList(model.do);
    }
    getLifecycleHooks('TryTaskCatch')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the TryTaskCatch.
   * Throws if invalid.
   */
  validate(workflow?: Partial<Specification.Workflow>) {
    const copy = new TryTaskCatch(this as any) as TryTaskCatchIntersection;
    validate('TryTaskCatch', copy, workflow);
  }

  /**
   * Normalizes the current instance of the TryTaskCatch.
   * Creates a copy of the TryTaskCatch, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the TryTaskCatch instance.
   */
  normalize(): TryTaskCatch & Specification.TryTaskCatch {
    const copy = new TryTaskCatch(this as any) as TryTaskCatchIntersection;
    return getLifecycleHooks('TryTaskCatch')?.normalize?.(copy) || copy;
  }
}

export const _TryTaskCatch = TryTaskCatch as TryTaskCatchConstructor;
