import React, { useEffect, useState } from "react";
import axios from "axios";
import { SurveyItems } from ".";

const Survey = () => {
  const [surveyScores, setSurveyScores] = useState({});

  const submitVote = async (characterId) => {
    const { data } = await axios.post("http://localhost:3002/survey", {
      characterId,
    });
    setSurveyScores(data);
  };

  const getSurveyScores = async () => {
    const { data } = await axios.get("http://localhost:3002/survey");
    setSurveyScores(data);
  };

  useEffect(() => {
    getSurveyScores();
  }, []);

  return (
    <div>
      <h2>Favorite Character?</h2>
      <div className="mb-2">
        <SurveyItems surveyScores={surveyScores} submitVote={submitVote} />
      </div>
    </div>
  );
};

export default Survey;
