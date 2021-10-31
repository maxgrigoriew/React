/** @format */

import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostContainer from './MyPosts/MypostContainer';
import { connect } from 'react-redux';
import { setProfileAC } from './../../Redux/profile-reduser';
import { withRouter } from 'react-router-dom';
import { getUserThunk } from './../../Redux/profile-reduser';
import { usersAPI } from '../../api/api'
import { Redirect } from 'react-router';



const Profile = (props) => {
    return ( < div className = { s.profile } >
        <
        ProfileInfo {...props }
        /> <
        MypostContainer / >
        <
        /div>
    );
};

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id = 20430;
        }
        this.props.getUserThunk(id)
    }
    render() {
        if (this.props.isAuth == false) {
            return <Redirect to = 'login' / >
        }
        return <Profile {...this.props }
        />;
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile,
        isAuth: state.authReducer.isAuth
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            return dispatch(setProfileAC(profile));
        },
        getUserThunk: (id) => {
            return dispatch(getUserThunk(id));
        },
    };
};

let withRouterContainer = withRouter(ProfileContainer);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouterContainer);