/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { End } from './end';
import { Error } from './error';
import { Metadata } from './metadata';
import { Repeat } from './repeat';
import { Statedatafilter } from './statedatafilter';
import { Transition } from './transition';
import {
  normalizeEndProperty,
  normalizeRepeatProperty,
  normalizeTransitionProperty,
  normalizeUsedForCompensationProperty,
  overwriteEndValueIfObject,
  overwriteMetadataValue,
  overwriteOnErrorsValue,
  overwriteRepeatValue,
  overwriteStateDataFilterValue,
  overwriteTransitionValueIfObject,
  setEndValueIfNoTransition,
} from './utils';

export class Subflowstate {
  constructor(model: any) {
    const defaultModel = {
      type: 'subflow',
      usedForCompensation: false,
      waitForCompletion: false,
    };
    Object.assign(this, defaultModel, model);

    overwriteEndValueIfObject(this);
    overwriteRepeatValue(this);
    overwriteStateDataFilterValue(this);
    overwriteOnErrorsValue(this);
    overwriteTransitionValueIfObject(this);
    overwriteMetadataValue(this);
  }

  /**
   * Unique state id
   */
  id?: string;
  /**
   * State name
   */
  name?: string;
  /**
   * State type
   */
  type?: 'subflow';
  /**
   * State end definition
   */
  end?: boolean | End;
  /**
   * Workflow execution must wait for sub-workflow to finish before continuing
   */
  waitForCompletion?: boolean;
  /**
   * Sub-workflow unique id
   */
  workflowId?: string;
  /**
   * SubFlow state repeat exec definition
   */
  repeat?: Repeat;
  /**
   * State data filter
   */
  stateDataFilter?: Statedatafilter;
  /**
   * States error handling and retries definitions
   */
  onErrors?: Error[];
  /**
   * Next transition of the workflow after SubFlow has completed execution
   */
  transition?: string | Transition;
  /**
   * Unique Name of a workflow state which is responsible for compensation of this state
   */
  compensatedBy?: string;
  /**
   * If true, this state is used to compensate another state. Default is false
   */
  usedForCompensation?: boolean;
  metadata?: /* Metadata information */ Metadata;

  /**
   * Normalize the value of each property by recursively deleting properties whose value is equal to its default value. Does not modify the object state.
   * @returns {Specification.Subflowstate} without deleted properties.
   */
  normalize = (): Subflowstate => {
    const clone = new Subflowstate(this);

    normalizeUsedForCompensationProperty(clone);

    if (!clone.waitForCompletion) {
      delete clone.waitForCompletion;
    }

    normalizeEndProperty(clone);
    normalizeTransitionProperty(clone);
    normalizeRepeatProperty(clone);
    setEndValueIfNoTransition(clone);

    return clone;
  };
}
