import styled from 'styled-components';

export const LinkBlock = styled.div`
	display: flex;
	margin-top: 40px;
	margin-right: 20px;
	margin-left: 20px;
	flex-direction: column;
	align-items: center;
`;

export const MenuLink = styled.div`
	display: flex;
	width: 70px;
	height: 70px;
	padding: 12px;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	background-color: rgba(247, 104, 104, 0.1);
	/* -webkit-transition: box-shadow 200ms ease-in-out, background-color 200ms ease-in-out, -webkit-transform 100ms ease-in-out; */
	/* transition: box-shadow 200ms ease-in-out, background-color 200ms ease-in-out, -webkit-transform 100ms ease-in-out; */
	transition: transform 100ms ease-in-out, box-shadow 200ms ease-in-out,
		background-color 200ms ease-in-out;
	/* transition: transform 100ms ease-in-out, box-shadow 200ms ease-in-out, background-color 200ms ease-in-out, -webkit-transform 100ms ease-in-out; */

	&:hover {
		background-color: #f76868;
		box-shadow: 0 15px 24px 0 rgba(247, 104, 104, 0.3);
	}

	&:active {
		transform: scale(0.9);
	}
`;
