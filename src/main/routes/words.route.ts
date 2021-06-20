import { FastifyInstance } from 'fastify';
import WordController from '../../presentantion/controllers/word.controller';

export default (app: FastifyInstance) => {
  app.register((instance: FastifyInstance, opts, done) => {
    instance
      .get('/words', {
        handler: WordController.loadWordByCriteria,
        schema: {
          querystring: {
            type: 'object',
            properties: {
              word: { type: 'string' },
              pos: { type: 'string' },
              synonym: { type: 'string' },
            },
          },
        },
      })
      .get('/words/:id', {
        handler: WordController.loadWordById,
        schema: {
          params: { type: 'object', properties: { id: { type: 'string' } } },
        },
      });
    done();
  }, { prefix: 'v1/api' });
};
