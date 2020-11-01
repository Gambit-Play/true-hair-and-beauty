import styled, { css } from 'styled-components';

export const ButtonContained = styled.a`
	padding: 16px 32px;
	background-color: #f76868;
	font-size: 18px;
	text-transform: uppercase;
	color: ${props => props.theme.white};
`;

export const ButtonOutlinedLight = styled.a`
	display: flex;
	width: 200px;
	height: 60px;
	justify-content: center;
	align-items: center;
	border: 2px solid #f1f2f2;
	background-color: transparent;
	color: #f1f2f2;
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
`;

export const Button = styled.a`
	display: flex;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	background-image: linear-gradient(225deg, #1de9b8, #1ec6ea);
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
	color: #fff;
	line-height: 1.25;
	font-weight: 500;
	text-decoration: none;
	text-transform: capitalize;
	transition: box-shadow 300ms cubic-bezier(0.25, 0.8, 0.25, 1);

	${props =>
		props.outlined &&
		css`
			padding-top: 6px;
			padding-bottom: 6px;
			border-style: solid;
			border-width: 2px;
			border-color: #1ec6ea;
			background-image: none;
			color: #1ec6ea;
		`}

	&:hover {
		box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);
	}

	&:active {
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
	}
`;
