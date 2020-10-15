import React, { Fragment } from 'react';

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
	const { services, typeOfService, service1, service2, service3 } = item;
	return (
		<Card isModal={isModal}>
			<div className='service-card-title'>{typeOfService}</div>
			{isSmall ? (
				// 3 items are shown if it's not a modal.
				<Fragment>
					<Card key='1' className='service-text-price'>
						<div>
							{services[service1].title} -{' '}
							<span className='text-span'>
								€{services[service1].price},-
							</span>
						</div>
					</Card>
					<Card key='2' className='service-text-price'>
						<div>
							{services[service2].title} -{' '}
							<span className='text-span'>
								€{services[service2].price},-
							</span>
						</div>
					</Card>
					<Card key='3' className='service-text-price'>
						<div>
							{services[service3].title} -{' '}
							<span className='text-span'>
								€{services[service3].price},-
							</span>
						</div>
					</Card>
				</Fragment>
			) : (
				// All items are shown if it's a modal.
				services.map((service, serviceIndex) => (
					<Card key={serviceIndex} className='service-text-price'>
						<div>
							{service.title} -{' '}
							<span className='text-span'>
								€{service.price},-
							</span>
						</div>
					</Card>
				))
			)}
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
