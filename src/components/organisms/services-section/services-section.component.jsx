import React from 'react';

// Components
import { Services } from './services-section.styles';
import { PinkDivider } from '../../atoms/divider/divider.styles';

const ServicesSection = () => {
	return (
		<Services reverse={false}>
			<div className='section-title-dark'>Onze Service</div>
			<PinkDivider />
			<div className='service-card'>
				<div className='service-card-price'>
					<div className='service-card-title'>KNIPPEN</div>
					<div className='service-text-price'>
						<div>
							Heren knippen -{' '}
							<span className='text-span'>€ 17,-</span>
						</div>
					</div>
					<div className='service-text-price'>
						<div>
							Heren knippen -{' '}
							<span className='text-span'>€ 17,-</span>
						</div>
					</div>
					<div className='service-text-price'>
						<div>
							Heren knippen -{' '}
							<span className='text-span'>€ 17,-</span>
						</div>
					</div>
					<button href='#' className='service-more-button w-button'>
						Alle Prijzen
					</button>
				</div>
				<div className='service-card-img'></div>
			</div>
		</Services>
	);
};

export default ServicesSection;
