import React from 'react';
import { compose } from 'redux';

// HOC
import WithUi from '../../HOC/with-ui.hoc';
import WithServiceDetail from '../../HOC/with-service-detail.hoc';

// Components
import { Card } from './service-card-price.styles';

const ServiceCardPrice = ({
	item,
	isSmall,
	isModal,
	buttonText,
	itemIndex,
	fetchServiceStart,
	toggleModal,
}) => {
	const handleClick = () => {
		isModal ? toggleModal() : fetchServiceStart(itemIndex);
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

export default compose(WithServiceDetail, WithUi)(ServiceCardPrice);
