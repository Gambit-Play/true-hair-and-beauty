import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

function App() {
	return (
		<Switch>
			<StyledThemeProvider theme={styledComponentsTheme}>
				<MainContainer>
					<MainWrapper>
						<Route exact path={ROUTES.HOME} component={HomePage} />
					</MainWrapper>
				</MainContainer>
			</StyledThemeProvider>
		</Switch>
	);
}

export default App;
