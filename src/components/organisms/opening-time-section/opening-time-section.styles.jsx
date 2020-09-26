import styled from 'styled-components';

// Images
import openingTimeImage from '../../../assets/opening-time-bg.jpg';

export const OpeningTime = styled.div`
	display: flex;
	padding-top: 40px;
	padding-bottom: 60px;
	flex-direction: column;
	align-items: center;
	background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.5)
		),
		url(${openingTimeImage});
	background-position: 0px 0px, 50% 35%;
	background-size: auto, cover;
	background-repeat: repeat, no-repeat;

	.opening-title {
		margin-bottom: 20px;
		font-family: ${props => props.theme.lustria};
		color: #f1f2f2;
		font-size: 36px;
		line-height: 1.25;
	}

	.pink-divider {
		width: 115px;
		height: 4px;
		margin-bottom: 54px;
		background-color: ${props => props.theme.primary};
	}

	.time-card-wrapper {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		.day-card-pink {
			display: flex;
			width: 146px;
			height: 146px;
			margin-right: 16px;
			margin-bottom: 16px;
			margin-left: 16px;
			padding: 12px;
			flex-direction: column;
			align-items: center;
			background-color: ${props => props.theme.primary};

			.box-day-white {
				margin-bottom: 30px;
				font-family: ${props => props.theme.lustria};
				color: #f1f2f2;
				font-size: 36px;
				line-height: 1.25;
				text-transform: uppercase;
			}

			.box-text-white {
				color: #f1f2f2;
				font-size: 18px;
				text-transform: uppercase;
			}
		}

		.day-card-white {
			display: flex;
			width: 146px;
			height: 146px;
			margin-right: 16px;
			margin-bottom: 16px;
			margin-left: 16px;
			padding: 12px;
			flex-direction: column;
			align-items: center;
			background-color: #fff;

			.box-day-dark {
				margin-bottom: 30px;
				font-family: ${props => props.theme.lustria};
				font-size: 36px;
				line-height: 1.25;
				text-transform: uppercase;
			}

			.box-text-dark {
				color: #333;
				font-size: 18px;
				text-transform: uppercase;
			}
		}
	}

	@media screen and (max-width: 991px) {
	}

	@media screen and (max-width: 767px) {
	}

	@media screen and (max-width: 479px) {
		.opening-title {
			font-size: 28px;
		}

		.time-card-wrapper {
			.day-card-pink,
			.day-card-white {
				width: 130px;
				height: 130px;
				margin-right: 8px;
				margin-left: 8px;
			}
		}
	}
`;
