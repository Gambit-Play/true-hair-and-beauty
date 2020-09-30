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
			<BgImage className={'service-card-img'} image={images[itemIndex]} />
		</Card>
	));
};

export default ServiceCard;
