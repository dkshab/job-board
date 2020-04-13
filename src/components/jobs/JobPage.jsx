import React, { Component } from "react";

import { firestore } from "../../firebase";
import { collectIdsAndData } from "../../utilities";
import JobCard from "./JobCard";

class JobPage extends Component {
  state = { job: null };

  get jobId() {
    return this.props.match.params.id;
  }

  get jobRef() {
    return firestore.doc(`jobs/${this.jobId}`);
  }

  unsubscribeFromJob = null;

  componentDidMount = async () => {
    this.unsubscribeFromJob = this.jobRef.onSnapshot((snapshot) => {
      const job = collectIdsAndData(snapshot);
      this.setState({ job }, () => {
        console.log(job);
      });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromJob();
  };

  render() {
    //console.log(this.props.match.params.id);
    const { job } = this.state;
    return <>{job && <JobCard {...job} />}</>;
  }
}

export default JobPage;
