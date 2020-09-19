import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import * as ROUTES from './routes/routes';

// Components
import HomePage from './pages/home-page/home-page.component';

// Styles
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import styledComponentsTheme from './themes/styled-components.theme';
import './App.css';

function App() {
	return (
		<Switch>
			<StyledThemeProvider theme={styledComponentsTheme}>
				<Route exact path={ROUTES.HOME} component={HomePage} />
			</StyledThemeProvider>
		</Switch>
	);
}

export default App;
