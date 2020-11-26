import { recordVote, SURVEY_SCORE } from './index';

describe('Service Test', () => {
  test('main function returns message', () => {
    const characterId = '1';
    expect(recordVote(characterId)).toEqual(SURVEY_SCORE);
  });
});
