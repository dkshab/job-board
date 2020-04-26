import React from "react";
import SearchCard from "./SearchCard";

const Hits = ({ hits }) => {
  return (
    <div>
      {hits.map((hit) => (
        <SearchCard key={hit.objectID} {...hit} />
      ))}
    </div>
  );
};

export default Hits;
