import React, { useEffect, useState } from 'react';

const FetchQuote = ({ onDataFetch }) => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
      const data = await response.json();
      onDataFetch(data.quotes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

};

export default FetchQuote;