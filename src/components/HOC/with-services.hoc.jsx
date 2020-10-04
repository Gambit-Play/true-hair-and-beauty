import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import { selectCurrenServices } from '../../redux/services/services.selectors';

// Redux: Actions
import {
	removeServicesCollectionListener,
	fetchServicesCollectionStart,
} from '../../redux/services/services.actions';

const WithServices = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		currentServices: selectCurrenServices,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		removeServicesCollectionListener: () =>
			dispatch(removeServicesCollectionListener()),
		fetchServicesCollectionStart: () =>
			dispatch(fetchServicesCollectionStart()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithServices;
