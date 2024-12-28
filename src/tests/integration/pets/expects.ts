import { Response } from 'supertest';

import { expectDefaultResponse } from '../shared/utils/expectsCommons';

class Expects {
  checkCreatePet(response: Response, payloadPet: any) {
    expectDefaultResponse(response, 200);
    expect(response.body).toEqual({ ...payloadPet });
  }

  checkUpdatePet(response: Response, payloadPet: any) {
    expectDefaultResponse(response, 200);
    expect(response.body).toEqual({ ...payloadPet });
  }
}

export default new Expects();
