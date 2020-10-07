import styled from 'styled-components';

// Images
import headerImage from '../../../assets/header.jpg';

export const Header = styled.div`
	height: 100vh;
	background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.5)
		),
		url(${headerImage});
	background-position: 0px 0px, 50% 40%;
	background-size: auto, cover;
	background-repeat: repeat, no-repeat;

	.header-logo-wrapper {
		padding: 5vh 5vw 0 5vw;
	}

	.header-text-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 8vh;

		.header-text-top {
			font-family: ${props => props.theme.lustria};
			margin-top: 12vh;
			color: ${props => props.theme.white};
			font-size: 72px;
			text-align: center;
			padding: 0 5vw 0 5vw;
		}

		.header-divider {
			width: 200px;
			height: 2px;
			margin-top: 8vh;
			background-color: ${props => props.theme.white};
		}

		.header-text-bottom {
			margin-top: 7vh;
			font-family: Raleway, sans-serif;
			color: ${props => props.theme.white};
			font-size: 36px;
			text-align: center;
			padding: 0 5vw 0 5vw;
		}
	}

	@media screen and (max-width: 767px) {
		.header-text-wrapper {
			.header-text-top {
				margin-top: 4vh;
				line-height: 90px;
			}

			.header-divider {
				margin-top: 4vh;
			}

			.header-logo-wrapper {
				display: flex;
				padding-left: 0vw;
				justify-content: center;
			}

			.header-text-bottom {
				margin-top: 6vh;
			}

			.button {
				margin-top: 12vh;
				font-size: 16px;
			}
		}
	}

	@media screen and (max-width: 479px) {
		.header-text-wrapper {
			.header-text-top {
				font-size: 52px;
				line-height: 64px;
			}
		}

		.header-logo-wrapper {
			display: flex;
			justify-content: center;

			.header-logo {
				max-width: 80%;
			}
		}
	}
`;
