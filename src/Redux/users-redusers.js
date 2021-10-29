/** @format */
import {usersAPI} from './../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const IS_FETCHING = 'IS_FETCHING';
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
	users: [],
	isFetching: false,
	pageSize: 10,
	pageNumber: 1,
	totalCount: null,
	// followingInProgress: false
	followingInProgress: [],
};

let usersReduser = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return {...user, followed: true};
					}
					return user;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return {...user, followed: false};
					}
					return user;
				}),
			};
		case SET_USERS:
			return {
				...state,
				users: action.users,
			};
		case IS_FETCHING:
			return {
				...state,
				isFetching: action.fetching,
			};
		case SET_PAGE_NUMBER:
			return {
				...state,
				pageNumber: action.currentPage,
			};
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.totalCount,
			};
		case TOGGLE_IS_FOLLOWING:
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.id]
					: [
							state.followingInProgress.filter(
								(id) => id != action.id
							),
					],
			};
		default:
			return state;
	}
};

export const followSucces = (userId) => {
	return {type: 'FOLLOW', userId};
};
export const unfollowSucces = (userId) => {
	return {type: 'UNFOLLOW', userId};
};
export const setUsers = (users) => {
	return {type: 'SET_USERS', users};
};
export const isTotalFetching = (fetching) => {
	return {type: 'IS_FETCHING', fetching};
};
export const setCurentPage = (current) => {
	return {type: 'SET_PAGE_NUMBER', currentPage: current};
};
export const setTotalCount = (totalCount) => {
	return {type: 'SET_TOTAL_COUNT', totalCount};
};
export const toggleFollowingInProgress = (followingInProgress, id) => {
	return {type: 'TOGGLE_IS_FOLLOWING', followingInProgress, id};
};

export const getUsersThunkCreator = (pageNumber, pageSize,) => {
	return (dispatch) => {
		dispatch(isTotalFetching(true));
		usersAPI.getUsers(pageNumber, pageSize).then((data) => {
			dispatch(setCurentPage(pageNumber));
			dispatch(setUsers(data.items));
			dispatch(setTotalCount(data.totalCount));
			dispatch(isTotalFetching(false));
		});
	};
};
// здесь дополнительный позожий код, но есть еще диспач. я добавил его в предыдущий код getUsersThunkCreator. Багов не замечено
// export const getChancheUsersThunk = (pageNumber, pageSize) => {
// 	return (dispatch) => {
// 		dispatch(isTotalFetching(true));
// 		usersAPI.getUsers(pageNumber, pageSize).then((data) => {
// 			dispatch(setCurentPage(pageNumber));
// 			dispatch(setUsers(data.items));
// 			dispatch(setTotalCount(data.totalCount));
// 			dispatch(isTotalFetching(false));
// 		});
// 	};
// };

//    ---------------------THUNKS------------------
export const followThunkCreacor = (UserId) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, UserId));
		usersAPI.followUser(UserId).then((data) => {
			if (data.resultCode == 0) {
				dispatch(followSucces(UserId));
			}
			dispatch(toggleFollowingInProgress(false, UserId));
		});
	};
};
export const unfollowThunkCreacor = (UserId) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, UserId));
		usersAPI.unFollowUser(UserId).then((data) => {
			if (data.resultCode == 0) {
				dispatch(unfollowSucces(UserId));
			}
			dispatch(toggleFollowingInProgress(false, UserId));
			
		});
	};
};

export default usersReduser;
