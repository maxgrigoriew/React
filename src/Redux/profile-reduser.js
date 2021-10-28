/** @format */

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	myPosts: [
		{id: 1, mes: 'hello'},
		{id: 2, mes: 'how are you?'},
	],
	newPostText: '',
	profile: ''
};
const profileReducer = (state = initialState, action) => {
	if (action.type === ADD_POST) {
		let newPost = {
			id: 4,
			mes: state.newPostText,
		};
		let stateCopy = {...state};
		stateCopy.myPosts = [...state.myPosts];

		if (!!stateCopy.newPostText) {
			stateCopy.myPosts.push(newPost);
			stateCopy.newPostText = '';
		}
		return stateCopy;
	}
	if (action.type === UPDATE_NEW_POST_TEXT) {
		return {
			...state,
			newPostText: action.newText,
		};
	}
	if (action.type === SET_USER_PROFILE) {
		return {
			...state,
			profile: action.profile,
		};
	}
	return state;
};

export let addPostCreater = () => {
	return {
		type: ADD_POST,
	};
};
export let onPostChangeCreater = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	};
};

export let setProfileAC = (profileID) => {
	return {
		type: SET_USER_PROFILE,
		profile: profileID,
	};
};
export default profileReducer;
