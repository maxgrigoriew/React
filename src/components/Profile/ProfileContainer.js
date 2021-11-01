/** @format */

import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostContainer from "./MyPosts/MypostContainer";
import { connect } from "react-redux";
import { setProfileAC } from "./../../Redux/profile-reduser";
import { withRouter } from "react-router-dom";
import { getUserThunk } from "./../../Redux/profile-reduser";
import { usersAPI } from "../../api/api";
import { Redirect } from "react-router";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo {...props} /> <MypostContainer />
    </div>
  );
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    if (!id) {
      id = 20430;
    }
    this.props.getUserThunk(id);
  }
  render() {
    return <Profile {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setProfile: function (profile) {
      return dispatch(setProfileAC(profile));
    },
    getUserThunk: (id) => {
      return dispatch(getUserThunk(id));
    },
  };
};

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
