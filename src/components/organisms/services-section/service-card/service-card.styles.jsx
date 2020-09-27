import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	width: 100%;
	color: #333;
	flex-direction: ${props => (props.reverse ? 'row-reverse' : 'unset')};

	.service-card-price {
		display: flex;
		width: 50%;
		padding: 60px 20px;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.service-card-title {
			font-family: ${props => props.theme.lustria};
			font-size: 40px;
			line-height: 1.25;
			text-transform: uppercase;
		}

		.service-text-price {
			width: 350px;
			margin-top: 40px;
			padding-bottom: 20px;
			border-bottom: 1px solid #888;
			font-size: 24px;
			font-weight: 500;
			text-align: center;

			.text-span {
				color: ${props => props.theme.primary};
			}
		}

		.service-more-button {
			display: flex;
			width: 200px;
			height: 60px;
			margin-top: 60px;
			justify-content: center;
			align-items: center;
			border-style: solid;
			border-width: 2px;
			border-color: #f76868;
			background-color: transparent;
			color: #333;
			font-size: 18px;
			font-weight: 700;
			text-transform: uppercase;
		}
	}

	@media screen and (max-width: 991px) {
		.service-card {
			.service-card-price {
				.service-text-price {
					width: 350px;
					margin-top: 40px;
					padding-bottom: 20px;
					border-bottom: 1px solid #888;
					font-size: 24px;
					font-weight: 500;
					text-align: center;
				}
			}
		}
	}

	@media screen and (max-width: 767px) {
		flex-direction: column-reverse;

		.service-card-price {
			width: 100%;
			padding-top: 40px;
			padding-bottom: 40px;

			.service-text-price {
				margin-top: 20px;
			}
		}

		.service-card-img {
			width: 100%;
			height: 300px;
		}
	}

	@media screen and (max-width: 479px) {
		.service-card {
			.service-card-price {
				.service-text-price {
					width: 100%;
					font-size: 18px;
				}
			}
		}
	}
`;
