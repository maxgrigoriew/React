/** @format */
import { connect } from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

import {
    isTotalFetching,
    setCurentPage,
    setTotalCount,
    getUsersThunkCreator,
    followThunkCreacor,
    unfollowThunkCreacor,

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
// HOC Redirect
let withAuthRedirectContainer = withAuthRedirect(UsersAPIContainer)

export default connect(mapStateToProps, {
    isTotalFetching,
    setCurentPage,
    setTotalCount,
    getUsersThunk: getUsersThunkCreator,
    followThunkCreacor,
    unfollowThunkCreacor,
    // сделал такую запись, чтобы показать, что мы вызываем череза пропсы не getUsersThunkCreator, а колбэк, который создаст getUsersThunkCreator. Для сокращения кода можно писать по новому синтаксису (getUsersThunkCreator: getUsersThunkCreator)
})(withAuthRedirectContainer);