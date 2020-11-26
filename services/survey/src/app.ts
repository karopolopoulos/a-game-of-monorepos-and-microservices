/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import { recordVote } from '.';

const app = express();

app.use(express.json());

app.post('/survey', (req, res) => {
  const { characterId } = req.body;

  const surveyScores = recordVote(characterId);
  res.json(surveyScores);
});

export default app;
