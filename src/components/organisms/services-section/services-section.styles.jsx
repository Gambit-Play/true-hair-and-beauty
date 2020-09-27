import styled from 'styled-components';

export const Services = styled.div`
	display: flex;
	padding-top: 60px;
	padding-bottom: 60px;
	flex-direction: column;
	align-items: center;

	.section-title-dark {
		margin-bottom: 20px;
		font-family: ${props => props.theme.lustria};
		color: #333;
		font-size: 36px;
		line-height: 1.25;
	}

	@media screen and (max-width: 479px) {
		.section-title-dark {
			font-size: 28px;
		}
	}
`;
