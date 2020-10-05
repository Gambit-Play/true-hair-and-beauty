import React from 'react';
import { compose } from 'redux';

// HOC
import WithServiceDetail from '../../HOC/with-service-detail.hoc';
import WithUi from '../../HOC/with-ui.hoc';

// Components
import { ModalContainer } from './modal.styles';
import ServiceCardPrice from '../service-card-price/service-card-price.component';

const Modal = ({ serviceDetail, toggleModal }) => {
	return (
		<ModalContainer>
			<div className='modal'>
				<ServiceCardPrice
					buttonText='Sluiten'
					isModal
					dispatchAction={toggleModal}
					item={serviceDetail}
				/>
			</div>
		</ModalContainer>
	);
};

export default compose(WithUi, WithServiceDetail)(Modal);
