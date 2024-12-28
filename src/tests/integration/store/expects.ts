import { Response } from 'supertest';

import { expectDefaultResponse } from '../shared/utils/expectsCommons';

class Expects {
  checkCreateStoreOrder(response: Response, payloadOrder: Record<string, unknown>) {
    expectDefaultResponse(response, 200);
    expect(response.body).toEqual({ ...payloadOrder });
  }

  checkGetStoreOrderById(response: Response, payloadOrder: Record<string, unknown>, orderId: number) {
    expectDefaultResponse(response, 200);
    expect(response.body).toEqual({
      id: orderId,
      ...payloadOrder
    });
  }
}

export default new Expects();
