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

import { builder, Builder } from '../../builder';
import { validate } from '../../validation';
import { Classes } from '../classes';
import { Specification } from '../definitions';

/**
 * The internal function used by the builder proxy to validate and return its underlying object
 * @param {Specification.EmitTaskEmit} model The underlying object
 * @returns {Specification.EmitTaskEmit} The validated underlying object
 */
function buildingFn(model: Specification.EmitTaskEmit): Specification.EmitTaskEmit {
  const instance = new Classes.EmitTaskEmit(model);
  validate('EmitTaskEmit', instance);
  return instance as Specification.EmitTaskEmit;
}

/**
 * A factory to create a builder proxy for the type `Specification.EmitTaskEmit`
 * @returns {Builder<Specification.EmitTaskEmit>} A builder for `Specification.EmitTaskEmit`
 */
export const emitTaskEmitBuilder = (model?: Partial<Specification.EmitTaskEmit>): Builder<Specification.EmitTaskEmit> =>
  builder<Specification.EmitTaskEmit>(model, buildingFn);
