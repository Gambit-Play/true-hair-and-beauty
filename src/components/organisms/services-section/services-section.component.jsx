import React from 'react';

// Components
import ServiceCard from './service-card/service-card.component';
import { Services } from './services-section.styles';
import { PinkDivider } from '../../atoms/divider/divider.styles';

const ServicesSection = () => {
	return (
		<Services>
			<div className='section-title-dark'>Onze Service</div>
			<PinkDivider />
			<ServiceCard />
		</Services>
	);
};

export default ServicesSection;
