import React, { useState, useEffect } from "react";
import Speak from "./Speech";
import '../scss/Content.scss'
import "../scss/Content.scss";

const Content = ({match}) => {
  const [RelatedTopics, setRelatedTopics] = useState([]);
  const [query, setQuery] = useState("");

  const {q} = match.params;




  const fetchResults = query => {
    if (query !== "") {
      fetch(`https://api.duckduckgo.com/?q=${query}&format=json`)
        .then(res => res.json())
        .then(data => setRelatedTopics(data.RelatedTopics));
    }
  };

  const handleClick = e => {
    const searchQuery = document.getElementById("search");
    setQuery(searchQuery.value);
  };
  
  //componentDidUpdate with query
  useEffect(() => fetchResults(q), [q]);

  return (
    <div className="container">
      <div className="search-container">
        <div className="input-container">
          <input
            id="search"
            className="search-input"
            type="text"
            name="query"
            placeholder="Search"
            aria-label="Search"
          />

          <button className="invisibutton fas fa-search" onClick={handleClick}>
            {/* <i className="fas fa-search"></i> */}
          </button>
        </div>
      </div>

      <div className="container">
        <div className="results-page">
          <div className="results">
            {RelatedTopics.map((hit, index) => (
              <div>
                <a
                  href={hit.FirstURL}
                  className="result-url text"
                  onClick={e => Speak(hit.FirstURL)}
                >
                  <span>{hit.FirstURL}</span>
                </a>
                <h4
                  onClick={e => Speak(hit.Text)}
                  className="result-title text"
                >
                  {hit.Text}
                </h4>
                <p className="result-description text">{hit.Text}</p>
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
      </div>
    </div>
  );
};

export default Content;
