import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectServiceDetail,
	selectIsEdit,
	selectIsNew,
} from '../../redux/handlers/service-detail/service-detail.selectors';

// Redux: Actions
import {
	fetchServiceStart,
	updateServicesStart,
	deleteServiceStart,
	addNewServicesStart,
	setServiceStart,
	setOtherServiceStart,
	setNewServiceStart,
	createServicesStart,
	deleteMainServicesStart,
	toggleEditStart,
	clearService,
	clearNewService,
	newServiceStart,
} from '../../redux/handlers/service-detail/service-detail.actions';

const WithServiceDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		serviceDetail: selectServiceDetail,
		isEdit: selectIsEdit,
		isNew: selectIsNew,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchServiceStart: (serviceIndex, isAdminFetch) =>
			dispatch(fetchServiceStart(serviceIndex, isAdminFetch)),
		createServicesStart: () => dispatch(createServicesStart()),
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
		deleteMainServicesStart: () => dispatch(deleteMainServicesStart()),
		newServiceStart: () => dispatch(newServiceStart()),
		deleteServiceStart: (serviceIndex, mainIndex) =>
			dispatch(deleteServiceStart(serviceIndex, mainIndex)),
		addNewServicesStart: serviceIndex =>
			dispatch(addNewServicesStart(serviceIndex)),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithServiceDetail;
