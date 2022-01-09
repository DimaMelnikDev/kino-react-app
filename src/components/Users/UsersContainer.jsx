import React from "react";
import { connect } from "react-redux";
import {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
  toggleFollowingProgress,
  unfollowThunk,
  followThunk,
  getUsersThunk,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {
  folowingInProgress,
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  isFetching,
} from "../../redux/user-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
  }
  setCurrentPage = (pageNumber) => {
    if (this.props.currentPage === pageNumber) return;
    this.props.getUsersThunk(this.props.pageSize, pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            setCurrentPage={this.setCurrentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            folowingInProgress={this.props.folowingInProgress}
            unfollowThunk={this.props.unfollowThunk}
            followThunk={this.props.followThunk}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: isFetching(state),
    folowingInProgress: folowingInProgress(state),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    unfollowThunk,
    followThunk,
    getUsersThunk,
  })
)(UsersContainer);
