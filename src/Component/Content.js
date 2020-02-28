import React, { Component } from 'react';
import axios from 'axios';
//import '../scss/result.css'
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organicResults: [],
      searchResult: ''
    };
  }
  //method

  componentDidMount() {
    axios
      .get(
        'https://api.apify.com/v2/datasets/ZRRzkyMtvqKCA76fH/items?format=json&fields=searchQuery,organicResults&unwind=organicResults'
      )
      .then(res => res.data)
      .then(data => this.setState({ organicResults: data }))
      .catch(error => console.log('catch the error ' + error));
  }

  render() {
    return (
      <div className="result">
        {this.state.organicResults.map((result, index) => (
          <div key={index}>
            <h1>{result.title}</h1>
            <span> {result.url} </span>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Content;
