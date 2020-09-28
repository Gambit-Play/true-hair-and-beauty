import React from 'react';

// Utils
import { isEven } from '../../../../utils/utils';

// Components
import { BgImage } from '../../../atoms/image/image.styles';
import { Card } from './service-card.styles';
import ServiceCardPrice from '../../service-card-price/service-card-price.component';

const ServiceCard = ({ data, images }) => {
	return data.map((item, itemIndex) => (
		<Card
			reverse={isEven(itemIndex)}
			key={itemIndex}
			className='service-card'
		>
			<ServiceCardPrice
				item={item}
				buttonText='Alle Prijzen'
				isSmall
				itemIndex={itemIndex}
			/>
			{
				// <div className='service-card-price'>
				// 	<div className='service-card-title'>
				// 		{item.typeOfService}
				// 	</div>
				// 	{item.services.slice(0, 3).map((service, serviceIndex) => (
				// 		<div key={serviceIndex} className='service-text-price'>
				// 			<div>
				// 				{service.title} -{' '}
				// 				<span className='text-span'>
				// 					€ {service.price},-
				// 				</span>
				// 			</div>
				// 		</div>
				// 	))}
				// 	<button className='service-more-button w-button'>
				// 		Alle Prijzen
				// 	</button>
				// </div>
			}
			<BgImage className={'service-card-img'} image={images[itemIndex]} />
		</Card>
	));
};

export default ServiceCard;
