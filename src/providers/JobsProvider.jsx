import React, { Component, createContext } from "react";

import { firestore } from "../firebase";
import { collectIdsAndData } from "../utilities";

export const JobsContext = createContext();

class JobsProvider extends Component {
  state = { jobs: [] };

  unsubscribeFromFirestore = null;

  componentDidMount = async () => {
    const snapshot = await firestore.collection("jobs").get();

    const jobs = snapshot.docs.map(collectIdsAndData);

    this.setState({ jobs });
  };

  componentWillUnmount() {
    this.unsubscribeFromFirestore();
  }

  render() {
    const { jobs } = this.state;
    const { children } = this.props;

    return <JobsContext.Provider value={jobs}>{children}</JobsContext.Provider>;
  }
}

export default JobsProvider;
