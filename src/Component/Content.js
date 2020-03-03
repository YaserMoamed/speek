import React, { useState, useEffect } from "react";
import Speak from "./Speech";
import '../scss/result.scss'

const Content = ({fetchResults}) => {
  const [RelatedTopics, setRelatedTopics] = useState([]);
  const [query, setQuery] = useState("");

  
  const handleClick = e => {
    const searchQuery = document.getElementById("search");
    setQuery(searchQuery.value);
    fetchResults(query,setRelatedTopics)
  };
  //componentDidUpdate with query
  //useEffect(() => fetchResults(query,setRelatedTopics), [query]);

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
      <ul>
        {RelatedTopics.map((hit, index) => (
          <div>
            <a href={hit.FirstURL} onClick={e => Speak(hit.FirstURL)}>
              <span>{hit.FirstURL}</span>
            </a>
            <h4 onClick={e => Speak(hit.Text)}>{hit.Text}</h4>
            <p>{hit.Text}</p>
          </div>
          //<QuoteItem key={index} quote={hit.Text} />
        ))}
      </ul>
    </div>
  );
};

export default Content;
