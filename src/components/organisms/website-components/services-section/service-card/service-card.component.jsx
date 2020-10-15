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
			<BgImage className={'service-card-img'} image={service.image} />
		</Card>
	));
};

export default compose(WithServiceDetail, WithServices)(ServiceCard);
