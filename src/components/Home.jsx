import React from "react";
import { useHistory } from "react-router-dom";

import useSetState from "./useSetState";

const initialState = {
  query: "",
};

const Home = () => {
  const history = useHistory();
  const [queryState, setQueryState] = useSetState(initialState);

  const handleChange = (event) => {
    setQueryState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(queryState);
    const { query } = queryState;

    history.push(`search/${query}`);
  };
  return (
    <div className="Home">
      <h1>Discover what's out there</h1>
      <form className="flex-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="query"
          value={queryState.query}
          onChange={handleChange}
          required
        />{" "}
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Home;
