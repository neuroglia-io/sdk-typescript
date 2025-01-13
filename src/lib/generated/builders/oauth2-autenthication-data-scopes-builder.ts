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

import { arrayBuilder, ArrayBuilder, BuildOptions } from '../../builder';
import { Classes } from '../classes';
import { OAuth2AutenthicationDataScopesIntersection } from '../classes/oauth2-autenthication-data-scopes';
import { Specification } from '../definitions';

/**
 * The internal function used by the builder proxy to validate and return its underlying array
 * @param {Specification.OAuth2AutenthicationDataScopes} model The proxied array
 * @param {BuildOptions} options The build options to use
 * @returns {OAuth2AutenthicationDataScopesIntersection} The built array
 */
function buildingFn(
  model: Specification.OAuth2AutenthicationDataScopes,
  options: BuildOptions,
): OAuth2AutenthicationDataScopesIntersection {
  const instance = new Classes.OAuth2AutenthicationDataScopes(model);
  if (options.validate) instance.validate();
  return (options.normalize ? instance.normalize() : instance) as unknown as OAuth2AutenthicationDataScopesIntersection;
}

/**
 * A factory to create a builder proxy for the type `OAuth2AutenthicationDataScopesIntersection`
 * @returns {ArrayBuilder<string, OAuth2AutenthicationDataScopesIntersection>} A builder for `OAuth2AutenthicationDataScopesIntersection`
 */
export const oAuth2AutenthicationDataScopesBuilder = (
  model?: Specification.OAuth2AutenthicationDataScopes,
): ArrayBuilder<string, OAuth2AutenthicationDataScopesIntersection> =>
  arrayBuilder<string, OAuth2AutenthicationDataScopesIntersection>(model, buildingFn);
