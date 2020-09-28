import React from 'react';

// Components
import { Card } from './service-card-price.styles';

const ServiceCardPrice = ({
	item,
	isSmall,
	isModal,
	buttonText,
	dispatchStart,
	itemIndex,
}) => {
	const handleClick = () => {
		isModal ? dispatchStart() : dispatchStart(itemIndex);
	};

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
			<button
				className='service-more-button w-button'
				onClick={handleClick}
			>
				{buttonText}
			</button>
		</Card>
	);
};

export default ServiceCardPrice;
