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

import { builder, Builder } from '../../builder';
import { validate } from '../../validation';
import { Classes } from '../classes';
import { Specification } from '../definitions';

/**
 * The internal function used by the builder proxy to validate and return its underlying object
 * @param {Specification.ExternalResource} model The underlying object
 * @returns {Specification.ExternalResource} The validated underlying object
 */
function buildingFn(model: Specification.ExternalResource): Specification.ExternalResource {
  const instance = new Classes.ExternalResource(model);
  validate('ExternalResource', instance);
  return instance as Specification.ExternalResource;
}

/**
 * A factory to create a builder proxy for the type `Specification.ExternalResource`
 * @returns {Builder<Specification.ExternalResource>} A builder for `Specification.ExternalResource`
 */
export const externalResourceBuilder = (
  model?: Partial<Specification.ExternalResource>,
): Builder<Specification.ExternalResource> => builder<Specification.ExternalResource>(model, buildingFn);
