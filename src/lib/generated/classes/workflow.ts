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

import { _Document } from './document';
import { _Input } from './input';
import { _Use } from './use';
import { _TaskList } from './task-list';
import { _WorkflowTimeout } from './workflow-timeout';
import { _Output } from './output';
import { _Schedule } from './schedule';
import { ObjectHydrator } from '../../hydrator';
import { Specification } from '../definitions';
import { getLifecycleHooks } from '../../lifecycle-hooks';
import { validate } from '../../validation';
import { isObject } from '../../utils';
import * as yaml from 'js-yaml';

/**
 * Represents the intersection between the Workflow class and type
 */
export type WorkflowIntersection = Workflow & Specification.Workflow;

/**
 * Represents a constructor for the intersection of the Workflow class and type
 */
export interface WorkflowConstructor {
  new (model?: Partial<Specification.Workflow>): WorkflowIntersection;
}

/**
 * Represents a Workflow with methods for validation normalization, and serialization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class Workflow extends ObjectHydrator<Specification.Workflow> {
  /**
   * Instanciates a new instance of the Workflow class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the Workflow.
   */
  constructor(model?: Partial<Specification.Workflow>) {
    super(model);
    const self = this as unknown as Specification.Workflow & object;
    if (isObject(model)) {
      if (typeof model.document === 'object') self.document = new _Document(model.document);
      if (typeof model.input === 'object') self.input = new _Input(model.input);
      if (typeof model.use === 'object') self.use = new _Use(model.use);
      if (typeof model.do === 'object') self.do = new _TaskList(model.do);
      if (typeof model.timeout === 'object') self.timeout = new _WorkflowTimeout(model.timeout);
      if (typeof model.output === 'object') self.output = new _Output(model.output);
      if (typeof model.schedule === 'object') self.schedule = new _Schedule(model.schedule);
    }
    getLifecycleHooks('Workflow')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the Workflow.
   * Throws if invalid.
   */
  validate(workflow?: Partial<Specification.Workflow>) {
    const copy = new Workflow(this as any) as WorkflowIntersection;
    validate('Workflow', copy, workflow);
  }

  /**
   * Normalizes the current instance of the Workflow.
   * Creates a copy of the Workflow, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the Workflow instance.
   */
  normalize(): Workflow & Specification.Workflow {
    const copy = new Workflow(this as any) as WorkflowIntersection;
    return getLifecycleHooks('Workflow')?.normalize?.(copy) || copy;
  }

  static deserialize(text: string): WorkflowIntersection {
    const model = yaml.load(text) as Partial<Specification.Workflow>;
    validate('Workflow', model);
    return new Workflow(model) as WorkflowIntersection;
  }

  static serialize(
    workflow: WorkflowIntersection,
    format: 'yaml' | 'json' = 'yaml',
    normalize: boolean = true,
  ): string {
    workflow.validate();
    const model = normalize ? workflow.normalize() : workflow;
    if (format === 'json') {
      return JSON.stringify(model);
    }
    return yaml.dump(model);
  }

  /**
   * Serializes the workflow to YAML or JSON
   * @param format The format, 'yaml' or 'json', default is 'yaml'
   * @param normalize If the workflow should be normalized before serialization, default true
   * @returns A string representation of the workflow
   */
  serialize(format: 'yaml' | 'json' = 'yaml', normalize: boolean = true): string {
    return Workflow.serialize(this as unknown as WorkflowIntersection, format, normalize);
  }
}

export const _Workflow = Workflow as WorkflowConstructor & {
  /**
   * Deserializes the provided string as a Workflow
   * @param text The YAML or JSON representation of a workflow
   * @returns A new Workflow instance
   */
  deserialize(text: string): WorkflowIntersection;

  /**
   * Serializes the provided Workflow to YAML or JSON
   * @param workflow The workflow to serialize
   * @param format The format, 'yaml' or 'json', default is 'yaml'
   * @param normalize If the workflow should be normalized before serialization, default true
   * @returns A string representation of the workflow
   */
  serialize(workflow: WorkflowIntersection, format?: 'yaml' | 'json', normalize?: boolean): string;
};
