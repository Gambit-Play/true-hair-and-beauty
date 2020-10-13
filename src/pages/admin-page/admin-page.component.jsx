import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Routes
import * as ROUTES from '../../routes/routes';

// Component
import SideMenu from '../../components/organisms/admin-components/side-menu/side-menu.component';
import { MainWrapper, AdminView } from './admin-page.styles';
import HeaderSection from '../../components/organisms/admin-components/header-section/header-section.component';

const AdminPage = () => {
	const { path } = useRouteMatch();

	return (
		<MainWrapper>
			<SideMenu />
			<AdminView>
				<Switch>
					<Route path={`${path}/${ROUTES.HEADER_SECTION}`}>
						<HeaderSection />
					</Route>
					<Route path={`${path}/world`}>
						<h1>World!!!</h1>
					</Route>
				</Switch>
			</AdminView>
		</MainWrapper>
	);
};

export default AdminPage;
