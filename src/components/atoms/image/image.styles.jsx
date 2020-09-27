import styled from 'styled-components';

export const BgImage = styled.div`
	width: 50%;
	height: 700px;
	background-image: url(${props => props.image});
	background-position: 50% 20%;
	background-size: cover;
	background-repeat: no-repeat;
`;
