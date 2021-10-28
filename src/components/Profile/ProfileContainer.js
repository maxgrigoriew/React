/** @format */

import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostContainer from './MyPosts/MypostContainer';
import {connect} from 'react-redux';
import axios from 'axios';
import {setProfileAC} from './../../Redux/profile-reduser';
import {withRouter} from 'react-router-dom';

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<ProfileInfo {...props} />
			<MypostContainer />
		</div>
	);
};

class ProfileContainer extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		if (!id) {
			id = 12;
		}
		const apiUrl =
			`https:social-network.samuraijs.com/api/1.0/profile/` + id;
		axios.get(apiUrl).then((resp) => {
			console.log(resp);
			this.props.setProfile(resp.data);
		});
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
		setProfile: (profile) => {
			return dispatch(setProfileAC(profile));
		},
	};
};
let withRouterContainer = withRouter(ProfileContainer);
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouterContainer);
