import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import { selectIsModalOpen } from '../../redux/ui/ui.selectors';
// Redux: Actions
import { toggleModal } from '../../redux/ui/ui.actions';

const WithUi = WrappedComponent => {
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors
	const mapStateToProps = createStructuredSelector({
		isModalOpen: selectIsModalOpen,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		toggleModal: serviceId => dispatch(toggleModal(serviceId)),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default WithUi;
