import React from 'react';
import { compose } from 'redux';

// HOC
import WithServices from '../../HOC/withServices';
import WithUi from '../../HOC/withUi';

// Components
import { ModalContainer } from './modal.styles';
import ServiceCardPrice from '../service-card-price/service-card-price.component';

const Modal = ({ currentServices, isModalOpen }) => {
	return (
		<ModalContainer show={isModalOpen}>
			<div className='modal'>
				<ServiceCardPrice
					buttonText='Sluiten'
					isModal
					item={currentServices[1]}
				/>
			</div>
		</ModalContainer>
	);
};

export default compose(WithUi, WithServices)(Modal);
