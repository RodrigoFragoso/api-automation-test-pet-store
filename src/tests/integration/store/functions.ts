import { Response } from 'supertest';

import {
  deleteRequest,
  getRequest,
  postRequest,
} from '../shared/utils/requestApi';

export const postOrder = async (
  payload: any,
): Promise<Response> => {
  const endpoint = '/store/order';
  return await postRequest(endpoint, payload);
};

export const getUserByUsername = async (
  username: string,
): Promise<Response> => {
  const endpoint = `/user/${username}`;
  return await getRequest(endpoint);
};

export const getOrderById = async (
  orderId: number,
): Promise<Response> => {
  const endpoint = `/store/order/${orderId}`;
  return await getRequest(endpoint);
};

export const deleteOrderById = async (
  orderId: number,
): Promise<Response> => {
  const endpoint = `/store/order/${orderId}`;
  return await deleteRequest(endpoint);
};