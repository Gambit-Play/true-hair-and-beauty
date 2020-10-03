import React from 'react';

// HOC
import WithServices from '../../HOC/withServices';

// Components
import { ModalContainer } from './modal.styles';
import ServiceCardPrice from '../service-card-price/service-card-price.component';

const Modal = ({ currenServices }) => {
	return (
		<ModalContainer show={true}>
			<div className='modal'>
				<ServiceCardPrice
					buttonText='Sluiten'
					isModal
					item={currenServices[1]}
				/>
			</div>
		</ModalContainer>
	);
};

export default WithServices(Modal);
