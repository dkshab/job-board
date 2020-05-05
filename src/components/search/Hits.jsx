import React from "react";
import SearchCard from "./SearchCard";

const Hits = ({ hits }) => {
  return (
    <>
      {hits.map((hit) => (
        <SearchCard key={hit.objectID} {...hit} />
      ))}
    </>
  );
};

export default Hits;
