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

import { _AuthenticationPolicyBasic } from './authentication-policy-basic';
import { _AuthenticationPolicyBearer } from './authentication-policy-bearer';
import { _AuthenticationPolicyOauth2 } from './authentication-policy-oauth2';
import { ObjectHydrator } from '../../hydrator';
import { Specification } from '../definitions';
import { getLifecycleHook } from '../../lifecycle-hooks';
import { validate } from '../../validation';
import { deepCopy, isObject } from '../../utils';

class CallAsyncAPIWithAuthentication extends ObjectHydrator<Specification.CallAsyncAPIWithAuthentication> {
  constructor(model?: Partial<Specification.CallAsyncAPIWithAuthentication>) {
    super(model);
    const self = this as unknown as Specification.CallAsyncAPIWithAuthentication & object;
    if (isObject(model)) {
      if (typeof model.basic === 'object')
        self.basic = new _AuthenticationPolicyBasic(model.basic as Specification.AuthenticationPolicyBasic);
      if (typeof model.bearer === 'object')
        self.bearer = new _AuthenticationPolicyBearer(model.bearer as Specification.AuthenticationPolicyBearer);
      if (typeof model.oauth2 === 'object')
        self.oauth2 = new _AuthenticationPolicyOauth2(model.oauth2 as Specification.AuthenticationPolicyOauth2);
    }
    getLifecycleHook('CallAsyncAPIWithAuthentication')?.constructor?.(this);
  }

  validate() {
    const copy = new CallAsyncAPIWithAuthentication(this as any) as CallAsyncAPIWithAuthentication &
      Specification.CallAsyncAPIWithAuthentication;
    getLifecycleHook('CallAsyncAPIWithAuthentication')?.preValidation?.(copy);
    validate('CallAsyncAPIWithAuthentication', deepCopy(copy)); // deepCopy prevents potential additional properties error for constructor, validate, normalize
    getLifecycleHook('CallAsyncAPIWithAuthentication')?.postValidation?.(copy);
  }

  normalize(): CallAsyncAPIWithAuthentication & Specification.CallAsyncAPIWithAuthentication {
    const copy = new CallAsyncAPIWithAuthentication(this as any) as CallAsyncAPIWithAuthentication &
      Specification.CallAsyncAPIWithAuthentication;
    return getLifecycleHook('CallAsyncAPIWithAuthentication')?.normalize?.(copy) || copy;
  }
}

export const _CallAsyncAPIWithAuthentication = CallAsyncAPIWithAuthentication as {
  new (
    model?: Partial<Specification.CallAsyncAPIWithAuthentication>,
  ): CallAsyncAPIWithAuthentication & Specification.CallAsyncAPIWithAuthentication;
};
