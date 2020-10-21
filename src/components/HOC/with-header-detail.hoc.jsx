import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectIsEdit,
	selectHeaderDetail,
} from '../../redux/handlers/header-detail/header-detail.selectors';

// Redux: Actions
import {
	fetchHeaderStart,
	setHeaderStart,
	toggleEditStart,
	clearHeader,
} from '../../redux/handlers/header-detail/header-detail.actions';

const WithHeaderDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		headerDetail: selectHeaderDetail,
		isEdit: selectIsEdit,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchHeaderStart: () => dispatch(fetchHeaderStart()),
		setHeaderStart: (inputName, value) =>
			dispatch(setHeaderStart(inputName, value)),
		toggleEditStart: () => dispatch(toggleEditStart()),
		clearHeader: () => dispatch(clearHeader()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithHeaderDetail;
