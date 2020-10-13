import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Routes
import * as ROUTES from '../../../../routes/routes';

// Components
import HeaderSection from '../header-section/header-section.component';

const AdminRoutes = () => {
	const { path } = useRouteMatch();

	console.log('@@@@@ AdminRoutes - path:', path);
	console.log(
		'@@@@@ AdminRoutes - newPath:',
		`${path}/${ROUTES.HEADER_SECTION}`
	);

	return (
		<Switch>
			<Route path={`${path}/${ROUTES.HEADER_SECTION}`}>
				<HeaderSection />
			</Route>
		</Switch>
	);
};

export default AdminRoutes;
