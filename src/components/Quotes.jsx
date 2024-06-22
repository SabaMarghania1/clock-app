import {useState, useEffect} from 'react';

import icon from '../assets/shared/icon-refresh.svg';

const Quotes = () => {
  const [quote, setQuote] = useState([]);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <section className="quote-container">
      {quote && (
        <>
          <p className="quote">“{quote.quote}”</p>
          <span className="author">{quote.author}</span>
        </>
      )}
      <span role="button" className="button">
        <img src={icon} alt="icon" onClick={() => fetchQuotes()} />
      </span>
    </section>
  );
};

export default Quotes;
