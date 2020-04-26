import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <h2>Home Page</h2>
      {/* <InstantSearch searchClient={searchClient} indexName="jobs">
        <div className="left-panel">
          <ClearRefinements />
          <h2>Jobs</h2>
          <RefinementList attribute="type" />
        </div>
        <div className="right-panel">
          <SearchBox />
          <CustomHits />
        </div>
      </InstantSearch> */}
    </div>
  );
};

// const Hits = ({ hits }) => (
//   <ol>
//     {hits.map((hit) => (
//       <li key={hit.objectID}>
//         {hit.title} <p>{hit.objectID}</p>
//       </li>
//     ))}
//   </ol>
// );

// const CustomHits = connectHits(Hits);

export default Home;
