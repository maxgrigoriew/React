/** @format */

import React from 'react';
import Head from './Head';
import axios from 'axios';
import {connect} from 'react-redux';
import { setUserData } from './../../Redux/auth-redusers';
import {usersAPI} from './../../api/api'

class HeadContainer extends React.Component {
	componentDidMount() {
		usersAPI.getAuth().then((resp) => {
			if (resp.resultCode == 0) {
				let {id, email, login} = resp.data;
				this.props.setUserData(id, email, login);
			}
		});
	}
	render() {
		return <Head {...this.props} />;
	}
}
let mapStateToProps = (state) => {
	return {
		login: state.authReducer.login,
		isAuth: state.authReducer.isAuth,
	};
};

export default connect(mapStateToProps, {setUserData})(HeadContainer);
