import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import { selectIsEdit } from '../../redux/handlers/header-detail/header-detail.selectors';

// Redux: Actions
import {
	fetchHeaderStart,
	toggleEditStart,
} from '../../redux/handlers/header-detail/header-detail.actions';

const WithHeaderDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		isEdit: selectIsEdit,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchHeaderStart: () => dispatch(fetchHeaderStart()),
		toggleEditStart: () => dispatch(toggleEditStart()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithHeaderDetail;
