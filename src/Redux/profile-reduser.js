/** @format */
import { usersAPI } from "./../api/api"
import { profileAPI } from "./../api/api"
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
	myPosts: [
		{ id: 1, mes: "hello" },
		{ id: 2, mes: "how are you?" },
	],
	newPostText: "111",
	profile: "",
	status: "",
}
const profileReducer = (state = initialState, action) => {
	if (action.type === ADD_POST) {
		let newPost = {
			id: 4,
			mes: state.newPostText,
		}
		let stateCopy = { ...state }
		stateCopy.myPosts = [...state.myPosts]

		if (!!stateCopy.newPostText) {
			stateCopy.myPosts.push(newPost)
			stateCopy.newPostText = ""
		}
		return stateCopy
	}
	if (action.type === UPDATE_NEW_POST_TEXT) {
		return {
			...state,
			newPostText: action.newText,
		}
	}
	if (action.type === SET_USER_PROFILE) {
		return {
			...state,
			profile: action.profile,
		}
	}
	if (action.type === SET_STATUS) {
		return {
			...state,
			status: action.status,
		}
	}
	return state
}

export let addPostCreater = () => {
	return {
		type: ADD_POST,
	}
}
export let updatePostCreater = (newText) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: newText,
	}
}
export let setStatus = (status) => {
	return {
		type: SET_STATUS,
		status: status,
	}
}

// export let onPostChangeCreater = (text) => {
// 	return {
// 		type: UPDATE_NEW_POST_TEXT,
// 		newText: text,
// 	}
// }

export let setProfileAC = (profileID) => {
	return {
		type: SET_USER_PROFILE,
		profile: profileID,
	}
}

export const getUserThunk = (user) => {
	return (dispatch) => {
		usersAPI.getProfile(user).then((resp) => {
			dispatch(setProfileAC(resp.data))
		})
	}
}
export const getStatusThunk = (status) => {
	return (dispatch) => {
		profileAPI.getStatus(status).then((resp) => {
			dispatch(setStatus(resp.data))
		})
	}
}
export const updateStatusThunk = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then((resp) => {
			// if (resp.resultCode == 0) {
			dispatch(setStatus(status))
			// }
		})
	}
}
export default profileReducer
