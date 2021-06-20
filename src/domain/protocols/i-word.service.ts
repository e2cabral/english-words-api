import Word from '../models/docs/word.doc';

export default interface IWordService {
  // eslint-disable-next-line no-unused-vars
  loadWordsByCriteria(word: string, pos: string, synonyms: string): Promise<Array<Word>>;
  // eslint-disable-next-line no-unused-vars
  loadWordById(id: string): Promise<Word>;
};
