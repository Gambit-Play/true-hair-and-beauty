import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectIsEdit,
	selectFooterDetail,
} from '../../redux/handlers/footer-detail/footer-detail.selectors';

// Redux: Actions
import {
	fetchFooterStart,
	toggleEditStart,
	clearFooter,
} from '../../redux/handlers/footer-detail/footer-detail.actions';

const WithFooterDetail = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		footerDetail: selectFooterDetail,
		isEdit: selectIsEdit,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchFooterStart: () => dispatch(fetchFooterStart()),
		toggleEditStart: () => dispatch(toggleEditStart()),
		clearFooter: () => dispatch(clearFooter()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithFooterDetail;
