import React, { useState, useEffect } from "react";
import Speak from "./Speech";
import "../scss/Content.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="results-page">
      <div className="results">
        {RelatedTopics.map((result, index) => {
          let resultImage;
          const itemNumber = index + 1;
          if (itemNumber % 3 === 0) {
            resultImage = (
              <div className="result-image result-image-row">
                <img src="/images/placeholder-image.png" />
                <img src="/images/placeholder-image.png" />
                <img src="/images/placeholder-image.png" />
              </div>
            );
          }
          return (
            <>
              <div className="result" key={index}>
                <span className="result-url text"> {result.url} </span>
                <h1 className="result-title text" onClick={e => Speak(result.Text)}>{result.Text}</h1>
                <p className="result-description text" onClick={e => Speak(result.Text)}>
                  {result.Text}
                </p>
              </div>
              {resultImage}
            </>
          );
        })}
      </div>

      <div className="result-image">
        <img src="/images/placeholder-image.png" />
        <img src="/images/placeholder-image.png" />
        <img src="/images/placeholder-image.png" />
      </div>
    </div>
  </div>
    
  );
};
export default Content;
