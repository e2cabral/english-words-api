import WordRepository from '../../data/repositories/usecases/word.repository';
import Word from '../models/docs/word.doc';
import IWordService from '../protocols/i-word.service';

class WordService implements IWordService {
  private repository: WordRepository;

  constructor(repository: WordRepository) {
    this.repository = repository;
  }

  loadWordsByCriteria(word: string, pos: string, synonyms: string): Promise<Array<Word>> {
    try {
      return this.repository.loadWordsByCriteria(word?.toUpperCase(), pos, synonyms);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadWordById(id: string): Promise<Word> {
    try {
      return this.repository.LoadWordById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new WordService(new WordRepository());
