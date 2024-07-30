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
import { Specification } from '../definitions';

/**
 * The internal function used by the builder proxy to validate and return its underlying array
 * @param {Specification.TaskList} model The proxied array
 * @param {BuildOptions} options The build options to use
 * @returns {Specification.TaskList} The built array
 */
function buildingFn(model: Specification.TaskList, options: BuildOptions): Specification.TaskList {
  const instance = new Classes.TaskList(model);
  if (options.validate) instance.validate();
  return (options.normalize ? instance.normalize() : instance) as Specification.TaskList;
}

/**
 * A factory to create a builder proxy for the type `Specification.TaskList`
 * @returns {ArrayBuilder<Specification.TaskList>} A builder for `Specification.TaskList`
 */
export const taskListBuilder = (model?: Specification.TaskList): ArrayBuilder<{ [k: string]: Specification.Task }> =>
  arrayBuilder<{ [k: string]: Specification.Task }>(model, buildingFn);
