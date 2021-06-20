import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import WordService from '../../domain/usecases/word.service';

class WordController {
  async loadWordByCriteria(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { word, pos, synonyms } = request.query as { word: string, pos: string, synonyms: string };
      reply.send(await WordService.loadWordsByCriteria(word, pos, synonyms));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadWordById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { id } = request.params as { id: string };
      reply.send(await WordService.loadWordById(id));
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default container.resolve(WordController);
