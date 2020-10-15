import styled, { css } from 'styled-components';
import NumberFormat from 'react-number-format';

// Styles
import { globalStyles } from '../../../../themes/styled-components.theme';

export const Card = styled.div`
	overflow: hidden;
	width: 300px;
	max-width: 300px;
	margin-right: 20px;
	margin-bottom: 20px;
	border-radius: 24px;
	background-color: #fff;
	box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
`;

export const CardContentWrapper = styled.div`
	padding: 20px;
`;

export const CardServiceTitle = styled.div`
	padding: 10px 20px;
	background-color: #f76868;
	color: #fff;
	font-size: 28px;
	line-height: 1.25;
	font-weight: 700;
	text-align: center;
`;

export const CardImage = styled.div`
	height: 175px;
	background-image: url(${props => props.image});
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const CardTitle = styled.div`
	margin-bottom: 4px;
	font-size: 18px;
	line-height: 1.25;
	font-weight: 700;
`;

export const CardButtonBlock = styled.div`
	display: flex;
	padding: 24px 20px;
`;

export const CardButton = styled.a`
	display: flex;
	margin-right: 20px;
	padding: 12px 16px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background-color: #f76868;
	box-shadow: 0 16px 24px 0 rgba(247, 104, 104, 0.3);
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;

	${props =>
		props.outline &&
		css`
			border-style: solid;
			border-width: 2px;
			border-color: #f76868;
			background-color: transparent;
			color: #333;
		`}

	${globalStyles.animationScale}
`;

export const CardInput = styled.input`
	width: 100%;
	padding: 8px 16px;
	border-style: solid;
	border-width: 1px;
	border-color: rgba(0, 0, 0, 0.14);
	border-radius: 20px;
	font-size: 16px;
	line-height: 1.25;
	font-weight: 500;
	transition: border-color 200ms ease-in-out;

	&:focus {
		outline-width: 0px;
		border-color: ${props => props.theme.primary};
	}
`;

export const CardTextArea = styled.input`
	width: 100%;
	padding: 8px 16px;
	border-style: solid;
	border-width: 1px;
	border-color: rgba(0, 0, 0, 0.14);
	border-radius: 20px;
	font-family: ${props => props.theme.raleway};
	font-size: 16px;
	line-height: 1.25;
	font-weight: 500;
	resize: vertical;
	transition: border-color 200ms ease-in-out;

	&:focus {
		outline-width: 0px;
		border-color: ${props => props.theme.primary};
	}
`;

export const CardNumberInput = styled(NumberFormat)`
	width: 100%;
	padding: 8px 16px;
	border-style: solid;
	border-width: 1px;
	border-color: rgba(0, 0, 0, 0.14);
	border-radius: 20px;
	font-family: ${props => props.theme.raleway};
	font-size: 16px;
	line-height: 1.25;
	font-weight: 500;
	resize: vertical;
	transition: border-color 200ms ease-in-out;

	&:focus {
		outline-width: 0px;
		border-color: ${props => props.theme.primary};
	}
`;

export const CardDivider = styled.div`
	height: 1px;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: rgba(0, 0, 0, 0.2);
`;
