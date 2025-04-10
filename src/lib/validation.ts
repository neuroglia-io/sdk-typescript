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
 * oUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import Ajv, { ValidateFunction } from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import workflowSchema from './generated/schema/workflow.json';
import { validationPointers } from './generated/validation';
import { deepCopy } from './utils';
import { getLifecycleHooks } from './lifecycle-hooks';
import { Specification } from './generated/definitions';

const ajv = new Ajv({
  schemas: [workflowSchema],
  strict: false,
});
addFormats(ajv);

/**
 * A Map of validation functions, where the key is the name of the schema to validate with
 */
const validators: Map<string, ValidateFunction> = new Map<string, ValidateFunction>(
  Object.entries(validationPointers).map(([typeName, jsonPointer]) => {
    if (!jsonPointer) throw `No JSON pointer provided for type '${typeName}'`;
    const validate = ajv.getSchema(jsonPointer);
    if (!validate) throw `Unable to find schema '${jsonPointer}' for type '${typeName}'`;
    return [typeName, validate as ValidateFunction];
  }),
);

/**
 * Validates the provided data or throws an error
 * @param typeName The data type to validate
 * @param data The data to validate
 * @param workflow A workflow instance, used for DSL level validation
 * @returns Throws if invalid
 */
export const validate = <T>(typeName: string, data: T, workflow?: Partial<Specification.Workflow>) => {
  getLifecycleHooks(typeName)?.preValidation?.(data, workflow);
  const validateFn: ValidateFunction | undefined = validators.get(typeName);
  if (!validateFn) {
    throw Error(`Unable to find a validation function for '${typeName}'`);
  }
  // prevents possible data mutation and invalid "additional properties" from the classes like constructor/validate/normalize
  if (!validateFn(deepCopy(data))) {
    throw new Error(
      `'${typeName}' is invalid:
${validateFn.errors?.reduce((acc, error) => acc + `- ${error.instancePath} | ${error.schemaPath} | ${error.message} | ${JSON.stringify(error.params)}\n`, '') ?? ''}

data: ${JSON.stringify(data, null, 4)}`,
    );
  }
  getLifecycleHooks(typeName)?.postValidation?.(data, workflow);
};
