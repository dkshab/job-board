import React from "react";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "N0A57B25NW",
  "a6b841e495d9dcc2bd90c16b529c9c20"
);

const Home = () => {
  return (
    <div className="Home">
      <InstantSearch searchClient={searchClient} indexName="jobs">
        <SearchBox />
        <CustomHits />
      </InstantSearch>
    </div>
  );
};

const Hits = ({ hits }) => (
  <ol>
    {hits.map((hit) => (
      <li key={hit.objectID}>
        {hit.title} <p>{hit.objectID}</p>
      </li>
    ))}
  </ol>
);

const CustomHits = connectHits(Hits);

export default Home;
