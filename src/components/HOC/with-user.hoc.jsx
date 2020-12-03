import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectCurrentUser,
	selectEmail,
	selectPassword,
} from '../../redux/user/user.selectors';

// Redux: Actions
import {
	emailSignInStart,
	setLoginCredentials,
	clearLoginCredentials,
	logOut,
} from '../../redux/user/user.actions';

const WithUser = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		currentUser: selectCurrentUser,
		email: selectEmail,
		password: selectPassword,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		emailSignInStart: () => dispatch(emailSignInStart()),
		clearLoginCredentials: () => dispatch(clearLoginCredentials()),
		logOut: () => dispatch(logOut()),
		setLoginCredentials: (inputName, value) =>
			dispatch(setLoginCredentials(inputName, value)),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithUser;
