import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class Searchbar extends Component {

  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
  }


  render() {

    return (
      <div className="container-fluid mx-auto" style={{ marginTop: '4rem', maxWidth: '31.25rem' }}>
        <div className="d-flex align-items-center w-100">
          <input
            className="search-bar"
            placeholder='Search...'
            value={this.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />

          <Link className="search-icon" to={`/search/${this.state.searchTerm}`} ><i className="bi bi-search" /></Link>
        </div>
      </div>
    )
  }
};
