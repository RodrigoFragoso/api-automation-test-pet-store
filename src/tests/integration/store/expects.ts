import { Response } from 'supertest';

import { expectDefaultResponse } from '../shared/utils/expectsCommons';

class Expects {
  checkCreateStoreOrder(response: Response, payloadOrder: any) {
    expectDefaultResponse(response, 200);
    expect(response.body).toEqual({ ...payloadOrder });
  }

  checkGetStoreOrderById(response: Response, payloadOrder: any, orderId: number) {
    expectDefaultResponse(response, 200);
    expect(response.body).toEqual({ 
      id: orderId,
      ...payloadOrder
    });
  }
}

export default new Expects();
