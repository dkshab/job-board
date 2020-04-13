import React, { Component } from "react";
import withUser from "../providers/withUser";

class UserProfile extends Component {
  state = { user: null };

  componentDidMount() {
    const { user } = this.props;
    //console.log(this.props);

    this.setState({ user }, () => {
      console.log(this.state.user);
    });
  }
  render() {
    console.log(this.state.user);
    return (
      <div className="UserProfile">
        <div className="Profile--avatar"></div>
        <div className="Profile--username"></div>
        <p className="Profile--bio">Is a person</p>
        <p>Update details</p>
      </div>
    );
  }
}

export default withUser(UserProfile);
