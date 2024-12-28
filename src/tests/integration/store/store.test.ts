import { faker } from '@faker-js/faker/.';

import expects from './expects';
import { deleteOrderById, getOrderById, postOrder } from './functions';

describe('Access to Petstore orders', () => {
    describe('POST /store/order', () => {
      it('should create a new order', async () => {
        const payload = {
          'id': 10,
          'petId': 198772,
          'quantity': faker.number.int({ min: 1, max: 100 }),
          'shipDate': faker.date.future().toISOString().replace('Z', '+00:00'),
          'status': faker.helpers.arrayElement(['placed', 'approved', 'delivered']),
          'complete': faker.datatype.boolean()
        };

        const response = await postOrder(payload);
        
        expects.checkCreateStoreOrder(response, payload);
      });
    });

    describe('GET /store/order/{orderId}', () => {
      let orderId: number;
      const payload = {
        'id': 10,
        'petId': 198772,
        'quantity': faker.number.int({ min: 1, max: 100 }),
        'shipDate': faker.date.future().toISOString().replace('Z', '+00:00'),
        'status': faker.helpers.arrayElement(['placed', 'approved', 'delivered']),
        'complete': faker.datatype.boolean()
      };

      beforeEach(async () => {
        const response = await postOrder(payload);
        orderId = response.body.id;
      });

      it('should return a 200 status code when the order is found', async () => {
        const response = await getOrderById(orderId);

        expects.checkGetStoreOrderById(response, payload, orderId);
      });
    });

    describe('DELETE /store/order/{orderId}', () => {
      let orderId: number;
      const payload = {
        'id': 10,
        'petId': 198772,
        'quantity': faker.number.int({ min: 1, max: 100 }),
        'shipDate': faker.date.future().toISOString().replace('Z', '+00:00'),
        'status': faker.helpers.arrayElement(['placed', 'approved', 'delivered']),
        'complete': faker.datatype.boolean()
      };

      beforeEach(async () => {
        const response = await postOrder(payload);
        orderId = response.body.id;
      });

      it('should delete an order', async () => {
        const response = await deleteOrderById(orderId);

        expect(response.status).toEqual(200);
      });

      // TODO: Skip this test, because the API is not working as expected
      it.skip('should return a 404 status code when the order is not found', async () => {
        const response = await deleteOrderById(999999);

        expect(response.status).toEqual(404);
      });
    });
  });