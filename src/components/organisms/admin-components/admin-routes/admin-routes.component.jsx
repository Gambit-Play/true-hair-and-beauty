import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Routes
import * as ROUTES from '../../../../routes/routes';

// Components
import { CardsWrapper } from './admin-routes.styles';
import HeaderSection from '../header-section/header-section.component';
import TimeSection from '../time-section/time-section.component';

const AdminRoutes = () => {
	const { path } = useRouteMatch();

	return (
		<Switch>
			<CardsWrapper>
				<Route path={`${path}/${ROUTES.HEADER_SECTION}`}>
					<HeaderSection />
				</Route>
				<Route path={`${path}/${ROUTES.TIME_SECTION}`}>
					<TimeSection />
				</Route>
			</CardsWrapper>
		</Switch>
	);
};

export default AdminRoutes;
