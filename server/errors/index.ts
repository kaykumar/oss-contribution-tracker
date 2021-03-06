/* Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
/**
 * Authz error for valid tokens, but no access to a resource.
 */
export class AccessError extends Error {
  status: number;

  constructor(message) {
    super();
    this.name = 'AccessError';
    this.message = message;
    this.status = 403;
  }
}

/**
 * Invalid request.
 */
export class RequestError extends Error {
  status: number;

  constructor(message) {
    super();
    this.name = 'RequestError';
    this.message = message;
    this.status = 400;
  }
}
