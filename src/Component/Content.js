import React, { Component } from "react";
import axios from "axios";
import "../scss/result.scss";
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
                    <img src="https://lh3.googleusercontent.com/proxy/RcOErbklnx-s0ZKBLDzmYJYFIstOZp6OJGiMIm9JDFnlRLkVXvV-kHFBPqr9C75dlgua8ZhDZ3psYhTzFK2ROMd7Pm8O4Fga8ihusUBu" />
                    <img src="https://lh3.googleusercontent.com/proxy/RcOErbklnx-s0ZKBLDzmYJYFIstOZp6OJGiMIm9JDFnlRLkVXvV-kHFBPqr9C75dlgua8ZhDZ3psYhTzFK2ROMd7Pm8O4Fga8ihusUBu" />
                    <img src="https://lh3.googleusercontent.com/proxy/RcOErbklnx-s0ZKBLDzmYJYFIstOZp6OJGiMIm9JDFnlRLkVXvV-kHFBPqr9C75dlgua8ZhDZ3psYhTzFK2ROMd7Pm8O4Fga8ihusUBu" />
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
            <img src="https://lh3.googleusercontent.com/proxy/RcOErbklnx-s0ZKBLDzmYJYFIstOZp6OJGiMIm9JDFnlRLkVXvV-kHFBPqr9C75dlgua8ZhDZ3psYhTzFK2ROMd7Pm8O4Fga8ihusUBu" />
            <img src="https://lh3.googleusercontent.com/proxy/RcOErbklnx-s0ZKBLDzmYJYFIstOZp6OJGiMIm9JDFnlRLkVXvV-kHFBPqr9C75dlgua8ZhDZ3psYhTzFK2ROMd7Pm8O4Fga8ihusUBu" />
            <img src="https://lh3.googleusercontent.com/proxy/RcOErbklnx-s0ZKBLDzmYJYFIstOZp6OJGiMIm9JDFnlRLkVXvV-kHFBPqr9C75dlgua8ZhDZ3psYhTzFK2ROMd7Pm8O4Fga8ihusUBu" />
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
