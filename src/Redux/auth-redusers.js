/** @format */
import { authAPI } from "../api/api"
const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true,
			}
		default:
			return state
	}
}

export let setUserData = (userId, email, login) => {
	return {
		type: SET_USER_DATA,
		data: { userId, email, login },
	}
}

export const authUserThunk = () => {
	return (dispatch) => {
		authAPI.getAuth().then((resp) => {
			// if (resp.resultCode == 0) {
			let { id, email, login } = resp.data
			dispatch(setUserData(id, email, login))
			// }
		})
	}
}

export default authReducer
