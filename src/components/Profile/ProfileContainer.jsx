import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  getProfile,
  // getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/AuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (this.props.initialized && !userId) {
      userId = this.props.id;
    }
    if (this.props.initialized && userId) {
      this.props.getProfile(userId);
      // this.props.getStatus(userId);
    }
  }

  render() {
    return (
      <div className={style.profile}>
        <ProfileInfo
          {...this.props}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />

        <PostsContainer />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    getProfile,
    // getStatus,
    updateStatus,
  }),
  withRouter
)(ProfileContainer);
