import React from 'react';

// Component
import HeaderSection from '../../components/organisms/header-section/header-section.component';
import AboutUsSection from '../../components/organisms/about-us-section/about-us-section.component';
import OpeningTimeSection from '../../components/organisms/opening-time-section/opening-time-section.component';

const HomePage = () => {
	return (
		<React.Fragment>
			<HeaderSection />
			<AboutUsSection />
			<OpeningTimeSection />
		</React.Fragment>
	);
};

export default HomePage;
