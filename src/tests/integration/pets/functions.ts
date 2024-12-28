import { Response } from 'supertest';

import {
  postRequest,
  putRequest,
} from '../shared/utils/requestApi';

export const postPet = async (
  payload: Record<string, unknown>,
): Promise<Response> => {
  const endpoint = '/pet';
  return await postRequest(endpoint, payload);
};

export const putPet = async (
  payload: Record<string, unknown>,
): Promise<Response> => {
  const endpoint = '/pet';
  return await putRequest(endpoint, payload);
};
