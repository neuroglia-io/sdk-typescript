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
import { UseExtensionsIntersection } from '../classes/use-extensions';
import { Specification } from '../definitions';

/**
 * The internal function used by the builder proxy to validate and return its underlying array
 * @param {Specification.UseExtensions} model The proxied array
 * @param {BuildOptions} options The build options to use
 * @returns {UseExtensionsIntersection} The built array
 */
function buildingFn(model: Specification.UseExtensions, options: BuildOptions): UseExtensionsIntersection {
  const instance = new Classes.UseExtensions(model);
  if (options.validate) instance.validate();
  return (options.normalize ? instance.normalize() : instance) as unknown as UseExtensionsIntersection;
}

/**
 * A factory to create a builder proxy for the type `UseExtensionsIntersection`
 * @returns {ArrayBuilder<Specification.ExtensionItem, UseExtensionsIntersection>} A builder for `UseExtensionsIntersection`
 */
export const useExtensionsBuilder = (
  model?: Specification.UseExtensions,
): ArrayBuilder<Specification.ExtensionItem, UseExtensionsIntersection> =>
  arrayBuilder<Specification.ExtensionItem, UseExtensionsIntersection>(model, buildingFn);
