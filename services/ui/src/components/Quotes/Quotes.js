import React, { useEffect, useState } from "react";
import axios from "axios";
import { QuoteButton, QuoteOutput } from ".";

const Quotes = () => {
  const [quoteObj, setQuoteObj] = useState({});

  const getNewQuote = async () => {
    const { data } = await axios.get("http://localhost:3001/quote");
    setQuoteObj(data);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div>
      <h2>Random Quote</h2>
      <div className="mb-2">
        <QuoteOutput quoteObj={quoteObj} />
      </div>
      <div className="fl-r">
        <QuoteButton getNewQuote={getNewQuote} />
      </div>
    </div>
  );
};

export default Quotes;
