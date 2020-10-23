import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectIsEdit,
	selectAboutUsDetail,
} from '../../redux/handlers/about-us-detail/about-us-detail.selectors';

// Redux: Actions
import {
	fetchAboutUsStart,
	updateAboutUsStart,
	setAboutUsStart,
	toggleEditStart,
	clearAboutUs,
} from '../../redux/handlers/about-us-detail/about-us-detail.actions';

const WithAboutUsDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		aboutUsDetail: selectAboutUsDetail,
		isEdit: selectIsEdit,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchAboutUsStart: () => dispatch(fetchAboutUsStart()),
		updateAboutUsStart: () => dispatch(updateAboutUsStart()),
		setAboutUsStart: (inputName, value) =>
			dispatch(setAboutUsStart(inputName, value)),
		toggleEditStart: () => dispatch(toggleEditStart()),
		clearAboutUs: () => dispatch(clearAboutUs()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithAboutUsDetail;
