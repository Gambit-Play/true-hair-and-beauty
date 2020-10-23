import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectIsEdit,
	selectTimeDetail,
} from '../../redux/handlers/time-detail/time-detail.selectors';

// Redux: Actions
import {
	fetchTimeStart,
	updateTimeStart,
	setTimeStart,
	toggleEditStart,
	clearTime,
} from '../../redux/handlers/time-detail/time-detail.actions';

const WithTimeDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		timeDetail: selectTimeDetail,
		isEdit: selectIsEdit,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchTimeStart: () => dispatch(fetchTimeStart()),
		updateTimeStart: () => dispatch(updateTimeStart()),
		setTimeStart: (inputName, value) =>
			dispatch(setTimeStart(inputName, value)),
		toggleEditStart: () => dispatch(toggleEditStart()),
		clearTime: () => dispatch(clearTime()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithTimeDetail;
