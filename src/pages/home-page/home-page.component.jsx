import React, { Fragment } from 'react';
import { compose } from 'redux';
import { motion, AnimatePresence } from 'framer-motion';

// HOC
import WithContent from '../../components/HOC/with-content.hoc';
import WithUi from '../../components/HOC/with-ui.hoc';

// Component
import HeaderSection from '../../components/organisms/website-components/header-section/header-section.component';
import AboutUsSection from '../../components/organisms/website-components/about-us-section/about-us-section.component';
import OpeningTimeSection from '../../components/organisms/website-components/opening-time-section/opening-time-section.component';
import ServicesSection from '../../components/organisms/website-components/services-section/services-section.component';
import FooterSection from '../../components/organisms/website-components/footer-section/footer-section.component';
import Modal from '../../components/organisms/website-components/modal/modal.component';
import Loader from '../../components/molecules/loader/loader.component';

const HomePage = ({ isContentFetching, isModalOpen }) => {
	return isContentFetching ? (
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

export default compose(WithUi, WithContent)(HomePage);
