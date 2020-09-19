import { css } from 'styled-components';

// Theme
const theme = {
	// Functions
	radius: number => `${number * 4}px`,
	spacing: number => `${number * 4}px`,
	fontSize: number => `${number * 4}px`,

	// Colors
	primary: '#F76868',

	// Fonts
	lustria: 'Lustria, serif',
	raleway: 'Raleway, sans-serif',

	// Font weights
	regular: 400,
	bold: 700,
};

// Global styles
export const globalStyles = {
	titles1: css`
		font-family: 'Lustria';
		font-size: 50px;
	`,
	body1: css`
		font-family: 'Raleway';
		font-size: 14px;
	`,
};

export default theme;
