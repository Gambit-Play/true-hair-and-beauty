import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';

// HOC
import WithServices from './components/HOC/with-services.hoc';

// Routes
import * as ROUTES from './routes/routes';

// Components
import HomePage from './pages/home-page/home-page.component';
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
	removeServicesCollectionListener,
}) {
	useEffect(() => {
		fetchServicesCollectionStart();
		return () => {
			removeServicesCollectionListener();
		};
	}, [fetchServicesCollectionStart, removeServicesCollectionListener]);

	return (
		<Switch>
			<StyledThemeProvider theme={styledComponentsTheme}>
				<MainContainer>
					<MainWrapper>
						<Route exact path={ROUTES.HOME}>
							<HomePage />
						</Route>
					</MainWrapper>
				</MainContainer>
			</StyledThemeProvider>
		</Switch>
	);
}

export default compose(WithServices)(App);
