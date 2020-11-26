import React from "react";
import { Card } from "react-bootstrap";

const QuoteOutput = ({ quoteObj }) => {
  return (
    <Card className="component-bg ta-c">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{quoteObj.quote}</p>
          <footer className="blockquote-footer">{quoteObj.character}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default QuoteOutput;
