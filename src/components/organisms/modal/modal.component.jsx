import React from 'react';

// Data
import { data } from '../../../data/data.schema';

// Components
import { ModalContainer } from './modal.styles';
import ServiceCardPrice from '../service-card-price/service-card-price.component';

const Modal = () => {
	return (
		<ModalContainer>
			<div className='modal'>
				<ServiceCardPrice buttonText='Sluiten' isModal item={data[0]} />
			</div>
		</ModalContainer>
	);
};

export default Modal;
