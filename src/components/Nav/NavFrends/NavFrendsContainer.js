/** @format */
import connect from 'react-redux/lib/connect/connect';
import React from 'react';
import NavFrends from './../NavFrends/NavFrends';

class NavFrendsContainer extends React.Component {
	debugger
	render() {
		return <NavFrends {...this.props}/>;
	}
}
mapStateToProps = (state) => {
	return {
		myPosts: state.profileReducer.myPosts,
	};
};
export default connect(mapStateToProps)(NavFrendsContainer);
