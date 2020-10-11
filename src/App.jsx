import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';

// HOC
import WithServices from './components/HOC/with-services.hoc';
import WithContent from './components/HOC/with-content.hoc';

// Routes
import * as ROUTES from './routes/routes';

// Components
import HomePage from './pages/home-page/home-page.component';
import AdminPage from './pages/admin-page/admin-page.component';
import {
	MainContainer,
	MainWrapper,
} from './components/atoms/container/container.styles';

// Styles
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import styledComponentsTheme from './themes/styled-components.theme';
import './App.css';

function App({
	fetchServicesCollectionStart,
	fetchContentCollectionStart,
	removeServicesCollectionListener,
	removeContentCollectionListener,
}) {
	useEffect(() => {
		// Start collection listeners
		fetchServicesCollectionStart();
		fetchContentCollectionStart();
		return () => {
			// Remove collection listeners
			removeServicesCollectionListener();
			removeContentCollectionListener();
		};
	}, [
		fetchServicesCollectionStart,
		fetchContentCollectionStart,
		removeServicesCollectionListener,
		removeContentCollectionListener,
	]);

	return (
		<Switch>
			<StyledThemeProvider theme={styledComponentsTheme}>
				<MainContainer>
					<MainWrapper>
						<Route exact path={ROUTES.HOME}>
							<HomePage />
						</Route>
						<Route exact path={ROUTES.ADMIN}>
							<AdminPage />
						</Route>
					</MainWrapper>
				</MainContainer>
			</StyledThemeProvider>
		</Switch>
	);
}

export default compose(WithContent, WithServices)(App);
