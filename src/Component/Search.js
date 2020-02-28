import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

//import '../scss/search.scss';
export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      organicResults: {},
      loading: false,
      message: ''
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
      <>
        <Navbar />
        <div className="search">
          <div className="container">
            <img className="logo" src="/speek.svg" alt="" />
            <div className="search-container">
              <i className="fas fa-search"></i>
              <input
                type="text"
                className="search-input"
                value={query}
                onChange={this.handleOnInputChange}
                placeholder="Search"
              />
              <i className="fas fa-microphone"></i>
            </div>
            <p className="page-description">
              Speek è il motore di ricerca che ti permette di ascoltare i testi
              oltre a leggerli, con un semplice click.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
