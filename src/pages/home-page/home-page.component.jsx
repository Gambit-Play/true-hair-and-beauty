import React from 'react';
import { compose } from 'redux';

// HOC
import WithServices from '../../components/HOC/with-services.hoc';

// Component
import HeaderSection from '../../components/organisms/header-section/header-section.component';
import AboutUsSection from '../../components/organisms/about-us-section/about-us-section.component';
import OpeningTimeSection from '../../components/organisms/opening-time-section/opening-time-section.component';
import ServicesSection from '../../components/organisms/services-section/services-section.component';
import FooterSection from '../../components/organisms/footer-section/footer-section.component';
import Modal from '../../components/organisms/modal/modal.component';
import Loader from '../../components/molecules/loader/loader.component';

const HomePage = ({ isServicesFetching }) => {
	return isServicesFetching ? (
		<Loader />
	) : (
		<React.Fragment>
			<Modal />
			<HeaderSection />
			<AboutUsSection />
			<OpeningTimeSection />
			<ServicesSection />
			<FooterSection />
		</React.Fragment>
	);
};

export default compose(WithServices)(HomePage);
