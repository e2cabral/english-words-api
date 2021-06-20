import Word from '../../../domain/models/docs/word.doc';

export default interface IWordRepository {
  // eslint-disable-next-line no-unused-vars
  loadWordsByCriteria(word: string, pos: string, synonyms: string): Promise<Array<Word>>;
  // eslint-disable-next-line no-unused-vars
  LoadWordById(id: string): Promise<Word>;
};
