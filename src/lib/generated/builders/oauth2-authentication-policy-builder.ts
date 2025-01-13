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
import { OAuth2AuthenticationPolicyIntersection } from '../classes/oauth2-authentication-policy';
import { Specification } from '../definitions';

/**
 * The internal function used by the builder proxy to validate and return its underlying object
 * @param {Specification.OAuth2AuthenticationPolicy} model The proxied object
 * @param {BuildOptions} options The build options to use
 * @returns {OAuth2AuthenticationPolicyIntersection} The built object
 */
function buildingFn(
  model: Specification.OAuth2AuthenticationPolicy,
  options: BuildOptions,
): OAuth2AuthenticationPolicyIntersection {
  const instance = new Classes.OAuth2AuthenticationPolicy(model);
  if (options.validate) instance.validate();
  return (options.normalize ? instance.normalize() : instance) as OAuth2AuthenticationPolicyIntersection;
}

/**
 * A factory to create a builder proxy for the type `OAuth2AuthenticationPolicyIntersection`
 * @returns {Builder<OAuth2AuthenticationPolicyIntersection, OAuth2AuthenticationPolicyIntersection>} A builder for `OAuth2AuthenticationPolicyIntersection`
 */
export const oAuth2AuthenticationPolicyBuilder = (
  model?: Partial<Specification.OAuth2AuthenticationPolicy>,
): Builder<Partial<Specification.OAuth2AuthenticationPolicy>, OAuth2AuthenticationPolicyIntersection> =>
  builder<Specification.OAuth2AuthenticationPolicy, OAuth2AuthenticationPolicyIntersection>(model, buildingFn);
