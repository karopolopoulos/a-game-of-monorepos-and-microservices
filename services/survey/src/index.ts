import { Characters } from './resources/characters';

interface CharacterSurveyScore {
  name: string;
  count: number;
}

export const SURVEY_SCORE = Object.fromEntries(
  Object.entries(Characters)
    .filter(([_k, v]) => typeof v !== 'number')
    .map(([position, character]) => [
      position,
      { name: character as string, count: 0 },
    ]),
);

export const recordVote = (
  characterId: string,
): Record<string, CharacterSurveyScore> => {
  SURVEY_SCORE[characterId].count += 1;

  return SURVEY_SCORE;
};

export const getSurveyScore = (): Record<string, CharacterSurveyScore> =>
  SURVEY_SCORE;
