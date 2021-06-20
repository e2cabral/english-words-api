import { getMongoRepository } from 'typeorm';
import IWordRepository from '../protocols/i-word.repository';
import Word from '../../../domain/models/docs/word.doc';

export default class WordRepository implements IWordRepository {
  loadWordsByCriteria(word: string, pos: string, synonyms: string): Promise<Array<Word>> {
    try {
      const where = {};
      const handler = getMongoRepository(Word);

      if (synonyms) Object.assign(where, { synonyms: new RegExp(`${synonyms}`) });
      if (word) Object.assign(where, { word: new RegExp(`^${word}`) });
      if (pos) Object.assign(where, { pos });

      return handler.find({
        where,
        take: 100,
        order: {
          word: 'ASC',
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  LoadWordById(id: string): Promise<Word> {
    try {
      const handler = getMongoRepository(Word);
      return handler.findOneOrFail(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
