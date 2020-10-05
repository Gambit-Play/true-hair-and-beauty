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
	background-color: rgba(3, 3, 3, 0.65);

	.modal {
		display: flex;
		overflow: auto;
		width: 500px;
		height: 70vh;
		padding: 40px 20px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: #f1f2f2;
	}

	@media screen and (max-width: 991px) {
	}

	@media screen and (max-width: 767px) {
		padding-left: 10%;
		padding-right: 10%;
	}

	@media screen and (max-width: 479px) {
	}
`;
