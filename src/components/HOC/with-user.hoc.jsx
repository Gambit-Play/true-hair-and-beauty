import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Redux: Actions
import { emailSignInStart } from '../../redux/user/user.actions';

const WithUser = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		currentUser: selectCurrentUser,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		emailSignInStart: () => dispatch(emailSignInStart()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithUser;
