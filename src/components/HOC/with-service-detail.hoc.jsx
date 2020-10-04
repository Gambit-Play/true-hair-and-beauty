import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import { selectServiceDetail } from '../../redux/handlers/service-detail/service-detail.selectors';

// Redux: Actions
import {
	fetchServiceStart,
	createServicesStart,
} from '../../redux/handlers/service-detail/service-detail.actions';

const WithServiceDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		serviceDetail: selectServiceDetail,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchServiceStart: serviceIndex =>
			dispatch(fetchServiceStart(serviceIndex)),
		createServicesStart: serviceIndex =>
			dispatch(createServicesStart(serviceIndex)),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithServiceDetail;
