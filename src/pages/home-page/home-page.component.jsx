import React, { Fragment } from 'react';
import { compose } from 'redux';
import { motion, AnimatePresence } from 'framer-motion';

// HOC
import WithServices from '../../components/HOC/with-services.hoc';
import WithUi from '../../components/HOC/with-ui.hoc';

// Component
import HeaderSection from '../../components/organisms/header-section/header-section.component';
import AboutUsSection from '../../components/organisms/about-us-section/about-us-section.component';
import OpeningTimeSection from '../../components/organisms/opening-time-section/opening-time-section.component';
import ServicesSection from '../../components/organisms/services-section/services-section.component';
import FooterSection from '../../components/organisms/footer-section/footer-section.component';
import Modal from '../../components/organisms/modal/modal.component';
import Loader from '../../components/molecules/loader/loader.component';

const HomePage = ({ isServicesFetching, isModalOpen }) => {
	return isServicesFetching ? (
		<Loader />
	) : (
		<Fragment>
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Modal />
					</motion.div>
				)}
			</AnimatePresence>

			<HeaderSection />
			<AboutUsSection />
			<OpeningTimeSection />
			<ServicesSection />
			<FooterSection />
		</Fragment>
	);
};

export default compose(WithUi, WithServices)(HomePage);
