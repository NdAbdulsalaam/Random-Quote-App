import React, { useEffect, useState } from 'react';

const Logic = ({ quotes }) => {
  const [currentQuote, setCurrentQuote] = useState({});
  const [colors] = useState([
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ]);

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  const animate = (selector, value) => {
    const element = document.querySelector(selector);
    element.style.opacity = '0';

    setTimeout(() => {
      element.style.opacity = '1';
      if (value !== undefined) {
        document.querySelector(selector + ' span').innerText = value;
      }
    }, 500);
  };

  const updateColors = () => {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
    button.style.backgroundColor = color;
    });
  };

  const getQuote = () => {
    const randomQuote = getRandomQuote();
    setCurrentQuote(randomQuote);

    // Update Twitter link
    const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
      `"${randomQuote.quote}" ${randomQuote.author}`
    )}`;
    document.getElementById('tweet-quote').setAttribute('href', tweetLink);

    // Update Tumblr link
    const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
      randomQuote.author
    )}&content=${encodeURIComponent(
      randomQuote.quote
    )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    document.getElementById('tumblr-quote').setAttribute('href', tumblrLink);

    // Animate quote text and author
    animate('.quote-text', randomQuote.quote);
    animate('.quote-author', randomQuote.author);

    // Animate background and button color
    updateColors();
  };

  useEffect(() =>{
    if(quotes.length){
      getQuote()
    }
  }, [quotes])

  const handleClick = () => {
    getQuote()
  }

  return (
    <div>
      <div className="quote-text">
        <i className="fa fa-quote-left"></i>
        <span id="text">{currentQuote.quote}</span>
      </div>
      <div className="quote-author">- <span id="author">{currentQuote.author}</span></div>
      <div className="buttons">
        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
          <i className="fa fa-tumblr"></i>
        </a>
        <button className="button" id="new-quote" onClick={handleClick}>
          New quote
        </button>
      </div>
    </div>
  );
};

export default Logic;
