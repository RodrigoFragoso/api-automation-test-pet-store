import { faker } from '@faker-js/faker';
import { Response } from 'supertest';

import { expectDefaultErrorMessageResponse } from '../shared/utils/expectsCommons';

import expects from './expects';
import {
  getUserByUsername,
  postUser,
} from './functions';

describe('Operations about user', () => {
    describe('POST /user', () => {
      // TODO: test skip because the server is not ready
      it.skip('should create a new user and return it with status 201', async () => {
        const payloadUser = {
          id: faker.number.int(),
          username: faker.internet.userName(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          phone: faker.phone.number(),
          userStatus: faker.number.int({ min: 0, max: 1 })
        };
  
        const response: Response = await postUser(payloadUser);
   
        expects.checkCreateUser(response, payloadUser);
      });

      it.skip('should return a 500 status code when the problem with the server', async () => {
        const payloadUser = {
          id: faker.number.int(),
          username: faker.internet.userName(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          phone: faker.phone.number(),
          userStatus: faker.number.int({ min: 0, max: 1 })
        };

        const response: Response = await postUser(payloadUser);

        expectDefaultErrorMessageResponse(response, 500, 'There was an error processing your request. It has been logged');
      });
    });

    describe('GET /user', () => {
      it('should return a 200 status code when the user is found', async () => {
        const username = 'theUser';

        const response: Response = await getUserByUsername(username);

        expects.checkGetUserByUsername(response);
      });

      // TODO: test skip because the endpoint is not implemented
      it.skip('should return a 404 status code when the user is not found', async () => {
        const username = 'invalidUser';

        const response: Response = await getUserByUsername(username);

        expectDefaultErrorMessageResponse(response, 404, 'User not found');
      });
    });
  });