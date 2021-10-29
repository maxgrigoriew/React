/** @format */

import React from 'react';
import Users from './Users';
import {usersAPI} from './../../api/api';

class UsersAPIContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// сделали thunk
		this.props.getUsersThunk(this.props.pageNumber, this.props.pageSize);
		// this.props.isTotalFetching(true);
		// usersAPI
		// 	.getUsers(this.props.pageNumber, this.props.pageSize)
		// 	.then((data) => {
		// 		this.props.setUsers(data.items);
		// 		this.props.setTotalCount(data.totalCount);
		// 		this.props.isTotalFetching(false);
		// 	});
	}
	onPagesChanged = (page) => {
		this.props.getUsersThunk(page, this.props.pageSize);
		// this.props.isTotalFetching(true);
		// this.props.setCurentPage(p);
		// usersAPI.getUsers(p, this.props.pageSize).then((data) => {
		// 	this.props.setUsers(data.items);
		// 	this.props.setTotalCount(data.totalCount);
		// 	this.props.isTotalFetching(false);
		// });
	};
	render() {
		return (
			<Users
				{...this.props}
				onPagesChanged={this.onPagesChanged}
			/>
		);
	}
}

export default UsersAPIContainer;
