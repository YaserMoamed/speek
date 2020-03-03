import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import Content from "./Component/Content";
import Search from "./Component/Search";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }
  getResult = e => {
    e.preventDefault();
    const result = e.target.elements.searchresult.value;
    document.write(result);
  };

  handleSearch = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <span className="browser-logo">
          <img
            src="/images/speek-logo.svg"
            alt="speek logo"
            width="64"
            height="100"
          />
        </span>
        <Search handleSearch={this.handleSearch} />
        <Content />
      </>
    );
  }
}
