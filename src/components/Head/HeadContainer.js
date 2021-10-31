/** @format */

import React from 'react';
import Head from './Head';
import { connect } from 'react-redux';
import { setUserData } from './../../Redux/auth-redusers';
import { authUserThunk } from './../../Redux/auth-redusers';

class HeadContainer extends React.Component {
    componentDidMount() {
        this.props.authUserThunkCreator()
    }
    render() {
        return <Head {...this.props }
        />;
    }
}
let mapStateToProps = (state) => {
    return {
        login: state.authReducer.login,
        isAuth: state.authReducer.isAuth,
    };
};
let MapDispatchToProps = (dispatch) => {
    return {
        setUserDataCreator: () => {
            return dispatch(setUserData())
        },
        authUserThunkCreator: () => {
            return dispatch(authUserThunk())
        }
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(HeadContainer);