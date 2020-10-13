import React from 'react';
import { compose } from 'redux';

// HOC
import WithServices from '../../../../HOC/with-services.hoc';
import WithServiceDetail from '../../../../HOC/with-service-detail.hoc';

// Utils
import { isEven } from '../../../../../utils/utils';

// Components
import { BgImage } from '../../../../atoms/image/image.styles';
import { Card } from './service-card.styles';
import ServiceCardPrice from '../../service-card-price/service-card-price.component';

// Images
import serviceImage1 from '../../../../../assets/service-bg-1.jpg';
import serviceImage2 from '../../../../../assets/service-bg-2.jpg';
import serviceImage3 from '../../../../../assets/service-bg-3.jpg';
import serviceImage4 from '../../../../../assets/service-bg-4.jpg';
import serviceImage5 from '../../../../../assets/service-bg-5.jpg';

// Background images
const images = [
	serviceImage1,
	serviceImage2,
	serviceImage3,
	serviceImage4,
	serviceImage5,
];

const ServiceCard = ({ currentServices, fetchServiceStart }) => {
	return currentServices.map((service, serviceIndex) => (
		<Card
			reverse={isEven(serviceIndex)}
			key={serviceIndex}
			className='service-card'
		>
			<ServiceCardPrice
				item={service}
				buttonText='Alle Prijzen'
				isSmall
				dispatchAction={fetchServiceStart}
				itemIndex={serviceIndex}
			/>
			<BgImage
				className={'service-card-img'}
				image={images[serviceIndex]}
			/>
		</Card>
	));
};

export default compose(WithServiceDetail, WithServices)(ServiceCard);
