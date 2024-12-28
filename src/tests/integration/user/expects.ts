import { Response } from 'supertest';

import { expectDefaultResponse } from '../shared/utils/expectsCommons';

class Expects {
  checkCreateUser(response: Response, payloadUser: Record<string, unknown>) {
    expectDefaultResponse(response, 200);
    expect(response.body).toEqual({ ...payloadUser });
  }

  checkGetUserByUsername(response: Response) {
    expectDefaultResponse(response, 200);
    expect(response.body).toEqual({
      id: 10,
      username: 'theUser',
      firstName: 'John',
      lastName: 'James',
      email: 'john@email.com',
      password: '12345',
      phone: '12345',
      userStatus: 1
    });
  }
}

export default new Expects();
