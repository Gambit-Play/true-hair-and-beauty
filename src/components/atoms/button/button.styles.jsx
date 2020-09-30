import styled from 'styled-components';

export const ButtonContained = styled.button`
	margin-top: 16vh;
	padding: 16px 32px;
	background-color: #f76868;
	font-size: 18px;
	text-transform: uppercase;
	color: ${props => props.theme.white};
`;

export const ButtonOutlinedLight = styled.button`
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
