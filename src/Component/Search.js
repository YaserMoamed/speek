import React, { Component } from "react";
import "../scss/Search.scss";
export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      organicResults: {},
      loading: false,
      message: ""
    };
  }
  handleOnInputChange = event => {
    const query = event.target.value;
    this.setState({ query: query });
    this.props.handleSearch(query);
  };
  render() {
    const { query } = this.state;
    console.log(this.state.query);
    return (
      <div className="container">
        <div className="Search">
          <div className="input-group">
            <input
              className="form-control searchbar"
              type="text"
              name="query"
              value={query}
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleOnInputChange}
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-text1">
                <i className="search-icon" aria-hidden="true">
                  {" "}
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
