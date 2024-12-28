import { Response } from 'supertest';

export const expectDefaultResponse = (response: Response, statusCode: number) => {
  expect(response.status).toBe(statusCode);
  expect(response).toHaveProperty('type', 'application/json');
};

export const expectDefaultErrorMessageResponse = (
  response: Response,
  statusCode: number,
  errorMessage: string
) => {
  expectDefaultResponse(response, statusCode);
  expect(response.body.message).toContain(errorMessage);
};
