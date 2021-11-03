/** @format */
import React from "react"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { connect } from "react-redux"
import {
	addPostCreater,
	updatePostCreater,
	getStatusThunk,
	setProfileAC,
	updateStatusThunk,
} from "./../../Redux/profile-reduser"
import { withRouter } from "react-router-dom"
import { getUserThunk } from "./../../Redux/profile-reduser"
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
import { compose } from "redux"
import MyPost from "./MyPosts/MyPost"

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<ProfileInfo {...props} />
			<MyPost {...props} />
		</div>
	)
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id
		if (!id) {
			id = 20430
		}
		this.props.getUserThunk(id)
		this.props.getStatus(id)
	}
	render() {
		return <Profile {...this.props} />
	}
}
let mapStateToProps = (state) => {
	return {
		profile: state.profileReducer.profile,
		status: state.profileReducer.status,
		myPosts: state.profileReducer.myPosts,
		newPostText: state.profileReducer.newPostText,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		setProfile: function (profile) {
			return dispatch(setProfileAC(profile))
		},
		getUserThunk: (id) => {
			return dispatch(getUserThunk(id))
		},
		getStatus: (status) => {
			return dispatch(getStatusThunk(status))
		},
		updateStatus: (status) => {
			return dispatch(updateStatusThunk(status))
		},
		addPost: () => {
			return dispatch(addPostCreater())
		},
		updatePost: (newText) => {
			return dispatch(updatePostCreater(newText))
		},
	}
}

export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)
