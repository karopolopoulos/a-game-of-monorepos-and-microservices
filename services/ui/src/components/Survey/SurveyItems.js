import React from "react";
import { Button, Card, Table } from "react-bootstrap";

const SurveyItems = ({ surveyScores, submitVote }) => {
  return (
    <Card className="component-bg">
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(surveyScores).map(([characterId, score]) => (
              <tr>
                <td>{score.name.split(/(?=[A-Z])/).join(" ")}</td>
                <td>{score.count}</td>
                <td>
                  <Button
                    className="fl-r"
                    variant="primary"
                    size="sm"
                    onClick={() => submitVote(characterId)}
                  >
                    Vote
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SurveyItems;
