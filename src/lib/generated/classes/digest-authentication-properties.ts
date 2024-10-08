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
 * Represents the intersection between the DigestAuthenticationProperties class and type
 */
export type DigestAuthenticationPropertiesIntersection = DigestAuthenticationProperties &
  Specification.DigestAuthenticationProperties;

/**
 * Represents a constructor for the intersection of the DigestAuthenticationProperties class and type
 */
export interface DigestAuthenticationPropertiesConstructor {
  new (model?: Partial<Specification.DigestAuthenticationProperties>): DigestAuthenticationPropertiesIntersection;
}

/**
 * Represents a DigestAuthenticationProperties with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class DigestAuthenticationProperties extends ObjectHydrator<Specification.DigestAuthenticationProperties> {
  /**
   * Instanciates a new instance of the DigestAuthenticationProperties class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the DigestAuthenticationProperties.
   */
  constructor(model?: Partial<Specification.DigestAuthenticationProperties>) {
    super(model);

    getLifecycleHooks('DigestAuthenticationProperties')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the DigestAuthenticationProperties.
   * Throws if invalid.
   */
  validate() {
    const copy = new DigestAuthenticationProperties(this as any) as DigestAuthenticationPropertiesIntersection;
    validate('DigestAuthenticationProperties', copy);
  }

  /**
   * Normalizes the current instance of the DigestAuthenticationProperties.
   * Creates a copy of the DigestAuthenticationProperties, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the DigestAuthenticationProperties instance.
   */
  normalize(): DigestAuthenticationProperties & Specification.DigestAuthenticationProperties {
    const copy = new DigestAuthenticationProperties(this as any) as DigestAuthenticationPropertiesIntersection;
    return getLifecycleHooks('DigestAuthenticationProperties')?.normalize?.(copy) || copy;
  }
}

export const _DigestAuthenticationProperties =
  DigestAuthenticationProperties as DigestAuthenticationPropertiesConstructor;
