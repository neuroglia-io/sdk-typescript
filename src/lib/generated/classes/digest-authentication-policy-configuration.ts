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
 * Represents the intersection between the DigestAuthenticationPolicyConfiguration class and type
 */
export type DigestAuthenticationPolicyConfigurationIntersection = DigestAuthenticationPolicyConfiguration &
  Specification.DigestAuthenticationPolicyConfiguration;

/**
 * Represents a constructor for the intersection of the DigestAuthenticationPolicyConfiguration class and type
 */
export interface DigestAuthenticationPolicyConfigurationConstructor {
  new (
    model?: Partial<Specification.DigestAuthenticationPolicyConfiguration>,
  ): DigestAuthenticationPolicyConfigurationIntersection;
}

/**
 * Represents a DigestAuthenticationPolicyConfiguration with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class DigestAuthenticationPolicyConfiguration extends ObjectHydrator<Specification.DigestAuthenticationPolicyConfiguration> {
  /**
   * Instanciates a new instance of the DigestAuthenticationPolicyConfiguration class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the DigestAuthenticationPolicyConfiguration.
   */
  constructor(model?: Partial<Specification.DigestAuthenticationPolicyConfiguration>) {
    super(model);

    getLifecycleHooks('DigestAuthenticationPolicyConfiguration')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the DigestAuthenticationPolicyConfiguration.
   * Throws if invalid.
   */
  validate() {
    const copy = new DigestAuthenticationPolicyConfiguration(
      this as any,
    ) as DigestAuthenticationPolicyConfigurationIntersection;
    validate('DigestAuthenticationPolicyConfiguration', copy);
  }

  /**
   * Normalizes the current instance of the DigestAuthenticationPolicyConfiguration.
   * Creates a copy of the DigestAuthenticationPolicyConfiguration, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the DigestAuthenticationPolicyConfiguration instance.
   */
  normalize(): DigestAuthenticationPolicyConfiguration & Specification.DigestAuthenticationPolicyConfiguration {
    const copy = new DigestAuthenticationPolicyConfiguration(
      this as any,
    ) as DigestAuthenticationPolicyConfigurationIntersection;
    return getLifecycleHooks('DigestAuthenticationPolicyConfiguration')?.normalize?.(copy) || copy;
  }
}

export const _DigestAuthenticationPolicyConfiguration =
  DigestAuthenticationPolicyConfiguration as DigestAuthenticationPolicyConfigurationConstructor;
