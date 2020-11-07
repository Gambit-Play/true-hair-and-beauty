import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectServiceDetail,
	selectIsEdit,
} from '../../redux/handlers/service-detail/service-detail.selectors';

// Redux: Actions
import {
	fetchServiceStart,
	updateServicesStart,
	deleteServicesStart,
	addNewServicesStart,
	setServiceStart,
	setOtherServiceStart,
	setNewServiceStart,
	createServicesStart,
	toggleEditStart,
	clearService,
	clearNewService
} from '../../redux/handlers/service-detail/service-detail.actions';

const WithServiceDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		serviceDetail: selectServiceDetail,
		isEdit: selectIsEdit,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchServiceStart: (serviceIndex, isAdminFetch) =>
			dispatch(fetchServiceStart(serviceIndex, isAdminFetch)),
		createServicesStart: serviceIndex =>
			dispatch(createServicesStart(serviceIndex)),
		setServiceStart: (index, inputName, value) =>
			dispatch(setServiceStart(index, inputName, value)),
		setOtherServiceStart: (inputName, value) =>
			dispatch(setOtherServiceStart(inputName, value)),
		setNewServiceStart: (inputName, value) =>
			dispatch(setNewServiceStart(inputName, value)),
		toggleEditStart: () => dispatch(toggleEditStart()),
		clearService: () => dispatch(clearService()),
		clearNewService: () => dispatch(clearNewService()),
		updateServicesStart: () => dispatch(updateServicesStart()),
		deleteServicesStart: (serviceIndex, mainIndex) =>
			dispatch(deleteServicesStart(serviceIndex, mainIndex)),
		addNewServicesStart: serviceIndex =>
			dispatch(addNewServicesStart(serviceIndex)),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithServiceDetail;
