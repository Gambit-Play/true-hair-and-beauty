import React from 'react';

// Component
import HeaderSection from '../../components/organisms/header-section/header-section.component';
import AboutUsSection from '../../components/organisms/about-us-section/about-us-section.component';
import OpeningTimeSection from '../../components/organisms/opening-time-section/opening-time-section.component';
import ServicesSection from '../../components/organisms/services-section/services-section.component';
import Modal from '../../components/organisms/modal/modal.component';

const HomePage = () => {
	return (
		<React.Fragment>
			<Modal />
			<HeaderSection />
			<AboutUsSection />
			<OpeningTimeSection />
			<ServicesSection />
		</React.Fragment>
	);
};

export default HomePage;
