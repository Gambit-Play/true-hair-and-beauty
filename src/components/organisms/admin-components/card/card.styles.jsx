import styled from 'styled-components';

export const Card = styled.div`
	position: relative;
	width: 350px;
	height: 400px;
	margin-right: 20px;
	margin-bottom: 20px;
	background-color: #fff;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
`;

export const CardImage = styled.div`
	height: 300px;
	background-image: url(${props => props.image});
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const CardTitle = styled.div`
	display: flex;
	height: 100px;
	padding-left: 20px;
	align-items: center;
	font-size: 24px;
	line-height: 1.25;
	font-weight: 500;
`;

export const CardRoundButton = styled.div`
	position: absolute;
	left: auto;
	top: auto;
	right: 20px;
	bottom: 75px;
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
