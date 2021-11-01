/** @format */

import React from 'react';
import Users from './Users';

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        // сделали thunk
        this.props.getUsersThunk(this.props.pageNumber, this.props.pageSize);
    }
    onPagesChanged = (page) => {
        this.props.getUsersThunk(page, this.props.pageSize);
    };
    render() {
        return <Users {...this.props }
        onPagesChanged = { this.onPagesChanged }
        />;
    }
}

export default UsersAPIContainer;