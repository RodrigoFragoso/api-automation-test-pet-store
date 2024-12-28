import request, { Response } from 'supertest';

export const getRequest = async (
  endpoint: string,
): Promise<Response> => {

  const response = await request(process.env.API_URL || '')
    .get(endpoint)
    .set('Content-Type', 'application/json');
  return response;
};

export const postRequest = async (
  endpoint: string,
  payload: any
): Promise<Response> => {
  const response = await request(process.env.API_URL || '')
    .post(endpoint)
    .set('Content-Type', 'application/json')
    .send(payload);
  return response;
};

export const putRequest = async (
  endpoint: string,
  payload: any
): Promise<Response> => {
  const response = await request(process.env.API_URL || '')
    .put(endpoint)
    .set('Content-Type', 'application/json')
    .send(payload);

  return response;
};

export const deleteRequest = async (
  endpoint: string,
): Promise<Response> => {
  const response = await request(process.env.API_URL || '')
    .delete(endpoint);
  return response;
};