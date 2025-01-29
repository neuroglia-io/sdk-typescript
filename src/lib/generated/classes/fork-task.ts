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

import { _Input } from './input';
import { _Output } from './output';
import { _Export } from './export';
import { _TaskTimeout } from './task-timeout';
import { _TaskMetadata } from './task-metadata';
import { _ForkTaskConfiguration } from './fork-task-configuration';
import { _TaskBase } from './task-base';
import { Specification } from '../definitions';
import { getLifecycleHooks } from '../../lifecycle-hooks';
import { validate } from '../../validation';
import { isObject } from '../../utils';

/**
 * Represents the intersection between the ForkTask class and type
 */
export type ForkTaskIntersection = ForkTask & Specification.ForkTask;

/**
 * Represents a constructor for the intersection of the ForkTask class and type
 */
export interface ForkTaskConstructor {
  new (model?: Partial<Specification.ForkTask>): ForkTaskIntersection;
}

/**
 * Represents a ForkTask with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class ForkTask extends _TaskBase {
  /**
   * Instanciates a new instance of the ForkTask class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the ForkTask.
   */
  constructor(model?: Partial<Specification.ForkTask>) {
    super(model);
    const self = this as unknown as Specification.ForkTask & object;
    if (isObject(model)) {
      if (typeof model.input === 'object') self.input = new _Input(model.input);
      if (typeof model.output === 'object') self.output = new _Output(model.output);
      if (typeof model.export === 'object') self.export = new _Export(model.export);
      if (typeof model.timeout === 'object') self.timeout = new _TaskTimeout(model.timeout);
      if (typeof model.metadata === 'object') self.metadata = new _TaskMetadata(model.metadata);
      if (typeof model.fork === 'object') self.fork = new _ForkTaskConfiguration(model.fork);
    }
    getLifecycleHooks('ForkTask')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the ForkTask.
   * Throws if invalid.
   */
  validate(workflow?: Partial<Specification.Workflow>) {
    const copy = new ForkTask(this as any) as ForkTaskIntersection;
    validate('ForkTask', copy, workflow);
  }

  /**
   * Normalizes the current instance of the ForkTask.
   * Creates a copy of the ForkTask, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the ForkTask instance.
   */
  normalize(): ForkTask & Specification.ForkTask {
    const copy = new ForkTask(this as any) as ForkTaskIntersection;
    return getLifecycleHooks('ForkTask')?.normalize?.(copy) || copy;
  }
}

export const _ForkTask = ForkTask as ForkTaskConstructor;
