import styled from 'styled-components';

export const Footer = styled.footer`
	padding: 40px;
	background-color: #4f4f4f;

	.footer-img-wrapper {
		display: flex;
		margin-bottom: 20px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.footer-contact-wrapper {
		display: flex;
		justify-content: center;

		.footer-left-section {
			width: 100%;

			.footer-title {
				margin-bottom: 10px;
				font-family: ${props => props.theme.lustria};
				color: #f1f2f2;
				font-size: 32px;
				line-height: 1.25;
			}

			.footer-pink-divider {
				width: 115px;
				height: 4px;
				margin-bottom: 20px;
				background-color: #f76868;
			}

			.footer-body {
				margin-bottom: 10px;
				color: #f1f2f2;
				font-size: 18px;
				line-height: 1.25;
				font-weight: 500;
			}
		}

		.footer-divider {
			width: 1px;
			margin-right: 40px;
			margin-left: 40px;
			background-color: rgba(241, 242, 242, 0.3);
		}

		.footer-right-section {
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
	}

	@media screen and (max-width: 991px) {
		padding: 20px;

		.footer-contact-wrapper {
			.footer-divider {
				margin-right: 20px;
				margin-left: 20px;
			}
		}
	}

	@media screen and (max-width: 767px) {
		.footer-contact-wrapper {
			flex-direction: column-reverse;

			.footer-left-section {
				margin-top: 40px;
			}

			.footer-divider {
				display: none;
			}

			.footer-right-section {
				margin-top: 20px;
			}
		}
	}
`;
