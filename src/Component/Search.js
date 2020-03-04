import React from "react";
import Footer from "./Footer";

const Search = ({ query, setQuery }) => {
  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className={`search ${query !== "" && "after-query"}`}>
        <div className="search after-query">
          <div className="container">
            <img
              className={`logo ${query !== "" && "after-query"}`}
              src="/speek.svg"
              alt=""
            />
            <img
              className={`min-logo ${query !== "" && "after-query"}`}
              src="/speek-logo.svg"
              alt=""
            />
            <form
              className={`search-container ${query !== "" && "after-query"}`}
            >
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
                Speek è il motore di ricerca che ti permette di ascoltare i
                testi oltre a leggerli, con un semplice click.
              </p>
            )}
          </div>
        </div>
      </div>
      {query === "" && <Footer />}
    </>
  );
};
export default Search;
