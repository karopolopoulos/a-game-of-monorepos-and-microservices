import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

const SurveyItems = ({ quoteObj }) => {
  console.log(quoteObj);
  return (
    <Card className="component-bg ta-c">
      <Card.Body>
        <div>
          <ProgressBar variant="success" now={40} />
          <ProgressBar variant="info" now={20} />
          <ProgressBar variant="warning" now={60} />
          <ProgressBar variant="danger" now={80} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SurveyItems;
