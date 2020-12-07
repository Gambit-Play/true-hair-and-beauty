import React from 'react';
import { compose } from 'redux';

// HOC
import WithServiceDetail from '../../../HOC/with-service-detail.hoc';
import WithUi from '../../../HOC/with-ui.hoc';

// Components
import { ModalContainer } from './modal.styles';
import ServiceCardPrice from '../service-card-price/service-card-price.component';
import { ButtonOutlinedLight } from '../../../atoms/button/button.styles';

const Modal = ({ serviceDetail, toggleModal }) => {
	const handleClick = event => {
		event.persist();
	};
	return (
		<ModalContainer onClick={handleClick}>
			<div className='modal'>
				<ServiceCardPrice
					buttonText='Sluiten'
					isModal
					dispatchAction={toggleModal}
					item={serviceDetail}
				/>
			</div>
			<ButtonOutlinedLight
				onClick={toggleModal}
				className='service-more-button'
			>
				Sluiten
			</ButtonOutlinedLight>
		</ModalContainer>
	);
};

export default compose(WithUi, WithServiceDetail)(Modal);
