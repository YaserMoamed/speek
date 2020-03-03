import React from 'react';
import Content from './Content';
import Search from './Search';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
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
        <div>
          <Search handleSearch={this.handleSearch} />
          <Content />{' '}
        </div>
      </>
    );
  }
}

// function comeVoglio() {
//   return (
//     <div>
//       <Search handleSearch={this.handleSearch} />
//       <Content />
//     </div>
//   );
// }

// export default comeVoglio;
