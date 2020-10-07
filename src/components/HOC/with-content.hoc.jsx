import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import {
	selectCurrenContent,
	selectIsFetching,
} from '../../redux/content/content.selectors';

// Redux: Actions
import {
	removeContentCollectionListener,
	fetchContentCollectionStart,
} from '../../redux/content/content.actions';

const WithContent = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		currentContent: selectCurrenContent,
		isContentFetching: selectIsFetching,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		removeContentCollectionListener: () =>
			dispatch(removeContentCollectionListener()),
		fetchContentCollectionStart: () =>
			dispatch(fetchContentCollectionStart()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithContent;
