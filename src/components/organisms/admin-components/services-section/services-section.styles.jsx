import styled from 'styled-components';

export const RoundButton = styled.div`
	position: absolute;
	right: 40px;
	bottom: 40px;
	width: 50px;
	height: 50px;
	padding: 8px;
	border-radius: 50%;
	cursor: pointer;
	background-image: linear-gradient(225deg, #1de9b8, #1ec6ea);
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
	transition: box-shadow 300ms cubic-bezier(0.25, 0.85, 0.25, 1);

	img {
		max-width: 100%;
		vertical-align: middle;
		display: inline-block;
	}

	&:hover {
		box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);
	}

	&:active {
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
	}
`;
