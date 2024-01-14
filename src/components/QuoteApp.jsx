import React, { useState } from 'react';
import FetchQuote from '@/components/FetchQuote';
import Logic from '@/components/Logic';

const QuoteApp = () => {
  const [quotes, setQuotes] = useState([]);
  const handleDataFetch = (data) => {
    setQuotes(data);
  };

  return (
    <div id="wrapper">
      <div id="quote-box">
        <FetchQuote onDataFetch={handleDataFetch} />
        <Logic quotes={quotes} />
      </div>
      <div className="footer">by <a href="https://github.com/ndabdulsalaam" target="_blank">Nurudeen Abdulsalaam</a></div>
    </div>
  );
};

export default QuoteApp;