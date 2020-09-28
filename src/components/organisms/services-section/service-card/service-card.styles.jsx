import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	width: 100%;
	color: #333;
	flex-direction: ${props => (props.reverse ? 'row-reverse' : 'unset')};

	@media screen and (max-width: 767px) {
		flex-direction: column-reverse;

		.service-card-img {
			width: 100%;
			height: 300px;
		}
	}
`;
