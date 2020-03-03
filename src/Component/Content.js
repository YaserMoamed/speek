import React, { Component } from "react";
import axios from "axios";
import "../scss/Content.scss";
import "bootstrap/dist/css/bootstrap.min.css";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organicResults: [],
      searchResult: ""
    };
  }
  //method

  componentDidMount() {
    axios
      .get(
        "https://api.apify.com/v2/datasets/ZRRzkyMtvqKCA76fH/items?format=json&fields=searchQuery,organicResults&unwind=organicResults"
      )
      .then(res => res.data)
      .then(data => this.setState({ organicResults: data.slice(0, 10) }))
      .catch(error => console.log("catch the error " + error));
  }

  render() {
    return (
      <div className="container">
        <div className="results-page">
          <div className="results">
            {this.state.organicResults.map((result, index) => {
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
                    <h1 className="result-title text">{result.title}</h1>
                    <p className="result-description text">
                      {result.description}
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
  }
}
export default Content;
