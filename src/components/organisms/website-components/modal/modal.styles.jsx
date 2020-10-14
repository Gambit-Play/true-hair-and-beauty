import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	left: 0%;
	top: 0%;
	right: 0%;
	bottom: 0%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: rgba(3, 3, 3, 0.65);
	z-index: 100;

	.modal {
		display: flex;
		overflow: auto;
		width: 500px;
		height: 70vh;
		padding: 0px 20px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: #f1f2f2;
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
		background-color: #fff;
		color: #333;
		font-size: 18px;
		font-weight: 700;
		text-transform: uppercase;
	}

	@media screen and (max-width: 991px) {
	}

	@media screen and (max-width: 767px) {
		padding-left: 10%;
		padding-right: 10%;

		.modal {
			width: 80%;
		}

		.service-more-button {
			width: 150px;
			height: 50px;
			margin-top: 20px;
			font-size: 16px;
			font-weight: 700;
		}
	}

	@media screen and (max-width: 479px) {
		padding-left: 5%;
		padding-right: 5%;

		.modal {
			width: 100%;
		}
	}
`;
