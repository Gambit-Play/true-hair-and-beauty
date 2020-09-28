import React from 'react';

// Components
import ServiceCard from './service-card/service-card.component';
import { Services } from './services-section.styles';
import { PinkDivider } from '../../atoms/divider/divider.styles';
import { BgImage } from '../../atoms/image/image.styles';

import { data } from '../../../data/data.schema';

// Images
import serviceImage1 from '../../../assets/service-bg-1.jpg';
import serviceImage2 from '../../../assets/service-bg-2.jpg';
import serviceImage3 from '../../../assets/service-bg-3.jpg';
import serviceImage4 from '../../../assets/service-bg-4.jpg';
import serviceImage5 from '../../../assets/service-bg-5.jpg';

const ServicesSection = () => {
	// Background images
	const images = [
		serviceImage1,
		serviceImage2,
		serviceImage3,
		serviceImage4,
		serviceImage5,
	];

	return (
		<Services>
			<div className='section-title-dark'>Onze Service</div>
			<PinkDivider />
			<ServiceCard data={data} images={images} />
		</Services>
	);
};

export default ServicesSection;
