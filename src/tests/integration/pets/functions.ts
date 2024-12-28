import { Response } from 'supertest';

import {
  postRequest,
  putRequest,
} from '../shared/utils/requestApi';

export const postPet = async (
  payload: any,
): Promise<Response> => {
  const endpoint = '/pet';
  return await postRequest(endpoint, payload);
};

export const putPet = async (
  payload: any,
): Promise<Response> => {
  const endpoint = '/pet';
  return await putRequest(endpoint, payload);
};