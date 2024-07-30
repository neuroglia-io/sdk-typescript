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
import { _RetryPolicyLimitAttempt } from './retry-policy-limit-attempt';
import { _Duration } from './duration';
import { Specification } from '../definitions';
import { isObject } from '../../utils';

class RetryPolicyLimit extends ObjectHydrator<Specification.RetryPolicyLimit> {
  constructor(model?: Partial<Specification.RetryPolicyLimit>) {
    super(model);
    const self = this as unknown as Specification.RetryPolicyLimit & object;
    if (isObject(model)) {
      if (typeof model.attempt === 'object') self.attempt = new _RetryPolicyLimitAttempt(model.attempt);
      if (typeof model.duration === 'object') self.duration = new _Duration(model.duration);
    }
  }
}

export const _RetryPolicyLimit = RetryPolicyLimit as {
  new (model?: Partial<Specification.RetryPolicyLimit>): RetryPolicyLimit & Specification.RetryPolicyLimit;
};
