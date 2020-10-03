import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import { selectCurrenServices } from '../../redux/services/services.selectors';
// Redux: Actions
import {} from '../../redux/services/services.actions';

const WithServices = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		currenServices: selectCurrenServices,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		// removeServicesListener: () =>
		// 	dispatch(removeServicesCollectionListener()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithServices;
