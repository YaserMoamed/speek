import React, { useState, useEffect } from "react";
import Speech from "./Speech";
import "./styles.css";
import Speak from "./Speech";

const App = () => {
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
    setQuery(e.target.value);
  };
  //componentDidMount
  useEffect(() => fetchResults(query), [query]);

  return (
    <div className="Search">
      <h1>Search something...</h1>
      <input className="box" type="text" placeholder="Enter text...." />
      <button onClick={e => handleClick()}>Search</button>
      <ul>
        {RelatedTopics.map((hit, index) => (
          <div>
            <h4 onClick={e => Speak(hit.Text)}>{hit.Text}</h4>
            <a href={hit.FirstURL}>
              <span>{hit.FirstURL}</span>
            </a>
            <p>{hit.Result}</p>
          </div>
          //<QuoteItem key={index} quote={hit.Text} />
        ))}
      </ul>
    </div>
  );
};

export default App;
