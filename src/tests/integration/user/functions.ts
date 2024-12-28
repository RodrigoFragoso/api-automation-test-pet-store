import { Response } from 'supertest';

import {
  getRequest,
  postRequest,
} from '../shared/utils/requestApi';

export const postUser = async (
  payload: any,
): Promise<Response> => {
  const endpoint = '/user';
  return await postRequest(endpoint, payload);
};

export const getUserByUsername = async (
  username: string,
): Promise<Response> => {
  const endpoint = `/user/${username}`;
  return await getRequest(endpoint);
};
