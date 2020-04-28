import React, { Component } from "react";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  connectHits,
  RefinementList,
} from "react-instantsearch-dom";

import Hits from "./search/Hits";

const searchClient = algoliasearch(
  "N0A57B25NW",
  "a6b841e495d9dcc2bd90c16b529c9c20"
);

const CustomHits = connectHits(Hits);

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="grid">
          <InstantSearch searchClient={searchClient} indexName="jobs">
            <div className="header">
              <SearchBox searchAsYouType={false} />
            </div>

            <div className="side">
              Refinement Panel
              <RefinementList attribute="location" operator="and" showMore />
            </div>

            <div className="main">
              {" "}
              <CustomHits />
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

export default Search;

/* <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <span className="fa fa-search"></span>
        </button> */
