import { faker } from '@faker-js/faker/.';

import expects from './expects';
import { postPet, putPet } from './functions';

describe('Everything about your Pets', () => {
    describe('POST /pets', () => {
      it('should create a pet', async () => {
        const payload = {
          'id': faker.number.int({ min: 1, max: 100 }),
          'name': faker.animal.dog(),
          'category': {
            'id': faker.number.int({ min: 1, max: 100 }),
            'name': 'Dogs'
          },
          'photoUrls': [
            faker.image.url()
          ],
          'tags': [
            {
              'id': faker.number.int({ min: 1, max: 100 }),
              'name': faker.animal.dog()
            }
          ],
          'status': faker.helpers.arrayElement(['available', 'pending', 'sold'])
        };

        const response = await postPet(payload);

        expects.checkCreatePet(response, payload);
      });
    });

    describe('PUT /pets', () => {
      const payload = {
        'id': faker.number.int({ min: 1, max: 100 }),
        'name': faker.animal.dog(),
        'category': {
          'id': faker.number.int({ min: 1, max: 100 }),
          'name': 'Dogs'
        },
        'photoUrls': [
          faker.image.url()
        ],
        'tags': [
          {
            'id': faker.number.int({ min: 1, max: 100 }),
            'name': faker.animal.dog()
          }
        ],
        'status': faker.helpers.arrayElement(['available', 'pending', 'sold'])
      };

      beforeEach(async () => {
        await postPet(payload);
      });

      it('should update a pet', async () => {
        const payloadUpdate = {
          'id': payload.id,
          'name': faker.animal.dog(),
          'category': {
            'id': payload.category.id,
            'name': 'Dogs'
          },
          'photoUrls': [
            faker.image.url()
          ],
          'tags': [
            {
              'id': payload.tags[0].id,
              'name': faker.animal.dog()
            }
          ],
          'status': faker.helpers.arrayElement(['available', 'pending', 'sold'])
        };

        const response = await putPet(payloadUpdate);

        expects.checkUpdatePet(response, payloadUpdate);
      });
    });
  });