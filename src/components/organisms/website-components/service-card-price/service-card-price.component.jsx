import React from 'react';

// Components
import { Card } from './service-card-price.styles';
import { ButtonOutlinedLight } from '../../../atoms/button/button.styles';

const ServiceCardPrice = ({
	item,
	isSmall,
	isModal,
	buttonText,
	itemIndex,
	dispatchAction,
}) => {
	return (
		<Card isModal={isModal}>
			<div className='service-card-title'>{item.typeOfService}</div>
			{isSmall
				? item.services.slice(0, 3).map((service, serviceIndex) => (
						<Card key={serviceIndex} className='service-text-price'>
							<div>
								{service.title} -{' '}
								<span className='text-span'>
									€{service.price},-
								</span>
							</div>
						</Card>
				  ))
				: item.services.map((service, serviceIndex) => (
						<Card key={serviceIndex} className='service-text-price'>
							<div>
								{service.title} -{' '}
								<span className='text-span'>
									€{service.price},-
								</span>
							</div>
						</Card>
				  ))}
			{!isModal && (
				<ButtonOutlinedLight
					className='service-more-button'
					onClick={() => dispatchAction(itemIndex)}
				>
					{buttonText}
				</ButtonOutlinedLight>
			)}
		</Card>
	);
};

export default ServiceCardPrice;
