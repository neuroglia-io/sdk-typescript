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
 * Represents the intersection between the AuthenticationPolicyReference class and type
 */
export type AuthenticationPolicyReferenceIntersection = AuthenticationPolicyReference &
  Specification.AuthenticationPolicyReference;

/**
 * Represents a constructor for the intersection of the AuthenticationPolicyReference class and type
 */
export interface AuthenticationPolicyReferenceConstructor {
  new (model?: Partial<Specification.AuthenticationPolicyReference>): AuthenticationPolicyReferenceIntersection;
}

/**
 * Represents a AuthenticationPolicyReference with methods for validation and normalization.
 * Inherits from ObjectHydrator which provides functionality for hydrating the state based on a model.
 */
export class AuthenticationPolicyReference extends ObjectHydrator<Specification.AuthenticationPolicyReference> {
  /**
   * Instanciates a new instance of the AuthenticationPolicyReference class.
   * Initializes properties based on the provided model if it is an object.
   *
   * @param model - Optional partial model object to initialize the AuthenticationPolicyReference.
   */
  constructor(model?: Partial<Specification.AuthenticationPolicyReference>) {
    super(model);

    getLifecycleHooks('AuthenticationPolicyReference')?.constructor?.(this);
  }

  /**
   * Validates the current instance of the AuthenticationPolicyReference.
   * Throws if invalid.
   */
  validate() {
    const copy = new AuthenticationPolicyReference(this as any) as AuthenticationPolicyReferenceIntersection;
    validate('AuthenticationPolicyReference', copy);
  }

  /**
   * Normalizes the current instance of the AuthenticationPolicyReference.
   * Creates a copy of the AuthenticationPolicyReference, invokes normalization hooks if available, and returns the normalized copy.
   *
   * @returns A normalized version of the AuthenticationPolicyReference instance.
   */
  normalize(): AuthenticationPolicyReference & Specification.AuthenticationPolicyReference {
    const copy = new AuthenticationPolicyReference(this as any) as AuthenticationPolicyReferenceIntersection;
    return getLifecycleHooks('AuthenticationPolicyReference')?.normalize?.(copy) || copy;
  }
}

export const _AuthenticationPolicyReference = AuthenticationPolicyReference as AuthenticationPolicyReferenceConstructor;
