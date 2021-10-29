/** @format */
import {connect} from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';

import {
	setUsers,
	followSucces,
	unfollowSucces,
	isTotalFetching,
	setCurentPage,
	setTotalCount,
	toggleFollowingInProgress,
	getUsersThunkCreator,
	followThunkCreacor,
	unfollowThunkCreacor,
	getChancheUsersThunk,
} from './../../Redux/users-redusers';

let mapStateToProps = (state) => {
	return {
		users: state.usersReduser.users,
		isFetching: state.usersReduser.isFetching,
		pageSize: state.usersReduser.pageSize,
		pageNumber: state.usersReduser.pageNumber,
		totalCount: state.usersReduser.totalCount,
		followingInProgress: state.usersReduser.followingInProgress,
	};
};


export default connect(mapStateToProps, {
	setUsers,
	followSucces,
	unfollowSucces,
	isTotalFetching,
	setCurentPage,
	setTotalCount,
	toggleFollowingInProgress,
	// сделал такую запись, чтобы показать, что мы вызываем череза пропсы не getUsersThunkCreator, а колбэк, который создаст getUsersThunkCreator. Для сокращения кода можно писать по новому синтаксису (getUsersThunkCreator: getUsersThunkCreator)

	getUsersThunk: getUsersThunkCreator,
	followThunkCreacor,
	unfollowThunkCreacor,
	getChancheUsersThunk,
})(UsersAPIContainer);
