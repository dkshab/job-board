import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <span className="fa fa-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
