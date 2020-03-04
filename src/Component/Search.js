import React from "react";
import Footer from "./Footer";

const Search = ({ query, setQuery }) => {
  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="search">
        <div className="container">
          <img className="logo" src="/speek.svg" alt="" />
          <form className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              id="search"
              value={query}
              onChange={handleChange}
            />
            <i className="fas fa-search" />
          </form>
          {query === "" && (
            <p className="page-description">
              Speek è il motore di ricerca che ti permette di ascoltare i testi
              oltre a leggerli, con un semplice click.
            </p>
          )}
        </div>
      </div>
      {query === "" && <Footer />}
    </>
  );
};
export default Search;
