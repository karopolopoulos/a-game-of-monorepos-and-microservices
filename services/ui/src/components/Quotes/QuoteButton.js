import React from "react";
import { Button } from "react-bootstrap";

const QuoteButton = ({ getNewQuote }) => {
  return (
    <Button variant="primary" onClick={getNewQuote}>
      New Quote
    </Button>
  );
};

export default QuoteButton;
