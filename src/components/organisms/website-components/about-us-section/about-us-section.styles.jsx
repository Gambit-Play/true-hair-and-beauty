import styled from 'styled-components';

// Images
import aboutUsImage from '../../../../assets/about-us-bg.jpg';

export const AboutUs = styled.div`
	display: flex;
	height: 500px;
	justify-content: flex-end;
	align-items: flex-start;
	background-color: #fff;
	background-image: url(${aboutUsImage});
	background-position: 130% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	.about-us-text-block {
		max-width: 580px;
		margin-top: 24px;
		margin-right: 12vw;
		display: flex;
		flex-direction: column;
		align-items: center;

		.about-us-title {
			margin-bottom: 20px;
			font-family: ${props => props.theme.lustria};
			font-size: 36px;
			line-height: 1.25;
			text-align: center;
		}
	}

	.about-us-body {
		font-size: 24px;
		line-height: 28px;
		text-align: center;
	}

	@media screen and (max-width: 991px) {
		height: 400px;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		background-position: -50vw 50%;
		background-size: auto 400px;

		.about-us-text-block {
			margin-right: 3vw;
			margin-left: 3vw;
		}
	}

	@media screen and (max-width: 767px) {
		background-position: 80% 50%;

		.about-us-body {
			font-size: 18px;
			line-height: 24px;
		}
	}

	@media screen and (max-width: 479px) {
		background-position: 64% 50%;

		.about-us-body {
			font-size: 18px;
			line-height: 24px;
		}
	}
`;
