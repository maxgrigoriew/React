import React from "react";
import {addPostCreater, onPostChangeCreater} from "../../../Redux/profile-reduser";
import MyPost from "./MyPost";
import { connect } from 'react-redux';

let MapStateToProps = (state) => {
	return {
		myPosts: state.profileReducer.myPosts,
		newPostText: state.profileReducer.newPostText
	}
}
let MapDispatchToProps = (dispatch) => {
	return {
		addPost: () => dispatch(addPostCreater()),
		onPostChange: (text) => dispatch(onPostChangeCreater(text))
	}
}

let MypostContainer = connect(MapStateToProps, MapDispatchToProps)(MyPost)
export default MypostContainer