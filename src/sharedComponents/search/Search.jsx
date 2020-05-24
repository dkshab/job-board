import React from "react";
import { useParams } from "react-router-dom";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  connectHits,
  RefinementList,
  Pagination,
  Configure,
} from "react-instantsearch-dom";

import Hits from "./Hits";

const searchClient = algoliasearch(
  "N0A57B25NW",
  "a6b841e495d9dcc2bd90c16b529c9c20"
);

const CustomHits = connectHits(Hits);

const Search = () => {
  const { query } = useParams();

  return (
    <div className="Search">
      <>
        <InstantSearch searchClient={searchClient} indexName="jobs">
          <Configure hitsPerPage={6} />
          <div className="Hero">
            <div className="Hero--inner">
              <h3>7 Jobs Found</h3>
              <SearchBox searchAsYouType={true} defaultRefinement={query} />
            </div>
          </div>
          <div className="MainContent">
            <aside>
              <div className="item">
                <p>Refine by City</p>
                <RefinementList attribute="location" operator="and" showMore />
              </div>
              <div className="item">
                <p>Refine by Type</p>
                <RefinementList attribute="type" operator="and" showMore />
              </div>
            </aside>
            <div className="Results">
              <CustomHits />
            </div>
          </div>
          <div className="Pagination">
            <Pagination />
          </div>
        </InstantSearch>
      </>
    </div>
  );
};

export default Search;
