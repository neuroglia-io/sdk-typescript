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
import { _CallGRPCWithService } from './call-grpc-with-service';
import { _CallGRPCWithArguments } from './call-grpc-with-arguments';
import { Specification } from '../definitions';
import { isObject } from '../../utils';

class CallGRPCWith extends ObjectHydrator<Specification.CallGRPCWith> {
  constructor(model?: Partial<Specification.CallGRPCWith>) {
    super(model);
    const self = this as unknown as Specification.CallGRPCWith & object;
    if (isObject(model)) {
      if (typeof model.service === 'object') self.service = new _CallGRPCWithService(model.service);
      if (typeof model.arguments === 'object') self.arguments = new _CallGRPCWithArguments(model.arguments);
    }
  }
}

export const _CallGRPCWith = CallGRPCWith as {
  new (model?: Partial<Specification.CallGRPCWith>): CallGRPCWith & Specification.CallGRPCWith;
};
