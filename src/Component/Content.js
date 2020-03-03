import React, { useState, useEffect } from "react";
import Speak from "./Speech";

const Content = () => {
  const [RelatedTopics, setRelatedTopics] = useState([]);
  const [query, setQuery] = useState("");

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
  useEffect(() => fetchResults(query), [query]);

  return (
    <div className="container">
      <h1>Search something...</h1>
      <input
        id="search"
        className="form-control my-0 py-2 red-border"
        type="text"
        name="query"
        placeholder="Search"
        aria-label="Search"
      />

      <button onClick={handleClick}>Search</button>
      <div className="container">
      <div className="results-page">
      
      <div className="results">
      {RelatedTopics.map((hit, index) => (
        <div>
        <a href={hit.FirstURL} className="result-url text" onClick={e => Speak(hit.FirstURL)}>
        <span>{hit.FirstURL}</span>
        </a>
        <h4 onClick={e => Speak(hit.Text)} className="result-title text">{hit.Text}</h4>
        <p className="result-description text" >{hit.Text}</p>
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
