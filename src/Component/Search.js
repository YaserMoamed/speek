import React, { Component } from 'react'
import '../scss/Search.scss'
export default class Search extends Component {

    constructor( props ) {
        super( props );

        this.state = { 
             query: '',
             organicResults: {},
             loading: false,
             message: ''
  }
}
handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query: query})
    this.props.handleSearch(query)
}
    render() {
        const { query } = this.state;
        console.log(this.state.query)
        return (
           <div className="Search">
                  <div className="input-group md-form form-sm form-2 pl-0">
                    <input className="form-control my-0 py-1 red-border" type="text" name="query" value={ query } placeholder="Search" aria-label="Search"
                    onChange={this.handleOnInputChange}/>
                   <div className="input-group-append">
                 <span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search text-grey"
                                aria-hidden="true"> Search</i></span>
                         </div>
                      </div>
            </div>
        )
    }
}
