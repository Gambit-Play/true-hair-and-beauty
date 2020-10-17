import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectIsEdit,
	selectBody,
	selectTitle,
} from '../../redux/handlers/about-us-detail/about-us-detail.selectors';

// Redux: Actions
import {
	fetchAboutUsStart,
	toggleEditStart,
	clearAboutUs,
} from '../../redux/handlers/about-us-detail/about-us-detail.actions';

const WithAboutUsDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		title: selectTitle,
		body: selectBody,
		isEdit: selectIsEdit,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchAboutUsStart: () => dispatch(fetchAboutUsStart()),
		toggleEditStart: () => dispatch(toggleEditStart()),
		clearAboutUs: () => dispatch(clearAboutUs()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithAboutUsDetail;
