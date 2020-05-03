import React from "react";
import { useParams } from "react-router-dom";

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

const Search = () => {
  const { query } = useParams();

  return (
    <div className="Search">
      <div className="grid">
        <InstantSearch searchClient={searchClient} indexName="jobs">
          <div className="header">
            <SearchBox searchAsYouType={true} defaultRefinement={query} />
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
};

export default Search;
