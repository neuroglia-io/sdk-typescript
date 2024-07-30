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

import { builder, Builder, BuildOptions } from '../../builder';
import { Classes } from '../classes';
import { Specification } from '../definitions';

/**
 * The internal function used by the builder proxy to validate and return its underlying object
 * @param {Specification.AuthenticationPolicyOauth2Client} model The proxied object
 * @param {BuildOptions} options The build options to use
 * @returns {Specification.AuthenticationPolicyOauth2Client} The built object
 */
function buildingFn(
  model: Specification.AuthenticationPolicyOauth2Client,
  options: BuildOptions,
): Specification.AuthenticationPolicyOauth2Client {
  const instance = new Classes.AuthenticationPolicyOauth2Client(model);
  if (options.validate) instance.validate();
  return (options.normalize ? instance.normalize() : instance) as Specification.AuthenticationPolicyOauth2Client;
}

/**
 * A factory to create a builder proxy for the type `Specification.AuthenticationPolicyOauth2Client`
 * @returns {Builder<Specification.AuthenticationPolicyOauth2Client>} A builder for `Specification.AuthenticationPolicyOauth2Client`
 */
export const authenticationPolicyOauth2ClientBuilder = (
  model?: Partial<Specification.AuthenticationPolicyOauth2Client>,
): Builder<Specification.AuthenticationPolicyOauth2Client> =>
  builder<Specification.AuthenticationPolicyOauth2Client>(model, buildingFn);
