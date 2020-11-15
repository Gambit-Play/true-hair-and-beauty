import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Routes
import * as ROUTES from '../../../../routes/routes';

// Components
import { CardsWrapper } from './admin-routes.styles';
import HeaderSection from '../header-section/header-section.component';
import TimeSection from '../time-section/time-section.component';
import ServicesSection from '../services-section/services-section.component';
import AboutUsSection from '../about-us-section/about-us-section.component';
import FooterSection from '../footer-section/footer-section.component';
import ServiceDetail from '../service-detail/service-detail.component';
import { Divider } from '../../../atoms/divider/divider.styles';

const AdminRoutes = () => {
	const { path } = useRouteMatch();

	return (
		<Switch>
			<CardsWrapper>
				{
					// <Route path={`${path}/${ROUTES.HEADER_SECTION}`}>
					// 	<HeaderSection />
					// </Route>
					// <Route path={`${path}/${ROUTES.TIME_SECTION}`}>
					// 	<TimeSection />
					// </Route>
					// <Route path={`${path}/${ROUTES.ABOUT_US_SECTION}`}>
					// 	<AboutUsSection />
					// </Route>
					// <Route path={`${path}/${ROUTES.FOOTER_SECTION}`}>
					// 	<FooterSection />
					// </Route>
				}
				<Route exact path={`${path}/${ROUTES.CONTENT}`}>
					<HeaderSection />
					<Divider />
					<TimeSection />
					{
						// <AboutUsSection />
						// <FooterSection />
					}
				</Route>
				<Route exact path={`${path}/${ROUTES.SERVICES_SECTION}`}>
					<ServicesSection />
				</Route>
				<Route
					exact
					path={`${path}/${ROUTES.SERVICES_SECTION}/:serviceId`}
				>
					<ServiceDetail />
				</Route>
			</CardsWrapper>
		</Switch>
	);
};

export default AdminRoutes;
