import React, { useState, useEffect } from "react";
import Speak from "./Speech";

const Content = ({ query }) => {
  const [relatedTopics, setRelatedTopics] = useState([]);
  const [time, setTime] = useState(Date.now());

  const fetchResults = query => {
    if (query !== "") {
      fetch(`https://api.duckduckgo.com/?q=${query}&format=json`)
        .then(res => res.json())
        .then(data => setRelatedTopics(data.RelatedTopics));
    }
  };
  //componentDidUpdate with query
  useEffect(() => fetchResults(query), [query]);

  const handleClick = text => {
    Speak(text);
  };

  return (
    <div className="container">
      {query !== "" && (
        <div className="results-page">
          <div className="results">
            {relatedTopics.map((hit, index) => (
              <div key={index}>
                <a
                  href={hit.FirstURL}
                  className="result-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{hit.FirstURL}</span>
                </a>
                <h4
                  onClick={() => handleClick(hit.Text)}
                  className="result-title text"
                >
                  {hit.Text}
                </h4>
                <p
                  className="result-description text"
                  onClick={() => handleClick(hit.Text)}
                >
                  {hit.Text}
                </p>
              </div>
              //<QuoteItem key={index} quote={hit.Text} />
            ))}
          </div>
          <div className="result-image">
            <img src="/images/placeholder-image.png" />
            <img src="/images/placeholder-image.png" />
            <img src="/images/placeholder-image.png" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
