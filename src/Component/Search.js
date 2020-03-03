import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Speak from './Speech'
import '../scss/Search.scss';
import {BrowserRouter as Router, Link } from "react-router-dom";



const Search = () =>  {
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
  }
  //componentDidUpdate with query
  useEffect(() => fetchResults(query), [query]);

    return (
      <>
        <Navbar />
        <div className="search">
          <div className="container">
            <img className="logo" src="/speek.svg" alt="" />
            <div className="search-container">
            <Link to="/results">
              <i className="fas fa-search"  onClick={handleClick}></i>
              </Link>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                id="search"
              />
              <i className="fas fa-microphone"></i>
            </div>
            <p className="page-description">
              Speek è il motore di ricerca che ti permette di ascoltare i testi
              oltre a leggerli, con un semplice click.
            </p>
          </div>
          {RelatedTopics.map((result, index) => (
            <div>
            <a href={result.FirstURL} className="result-url text" onClick={e => Speak(result.FirstURL)}>
            <span>{result.FirstURL}</span>
            </a>
            <h4 onClick={e => Speak(result.Text)} className="result-title text">{result.Text}</h4>
            <p className="result-description text" >{result.Text}</p>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
export default Search;
