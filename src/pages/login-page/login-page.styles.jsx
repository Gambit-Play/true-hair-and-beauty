import styled from 'styled-components';

// Images
import bgImage from '../../assets/login-bg-1.jpg';

export const MainWrapper = styled.div`
	display: grid;
	height: 100vh;
	grid-auto-columns: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	grid-template-columns: 1.5fr 1fr;
	grid-template-rows: auto;
`;

export const ImageBlock = styled.div`
	background-image: url(${bgImage});
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const InputWrapper = styled.div`
	display: flex;
	padding-top: 0px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f1f2f2;

	img {
		height: 190px;
		margin-top: -24vh;
		margin-bottom: 60px;
	}
`;

export const InputSection = styled.div`
	display: grid;
	width: 80%;
	padding: 40px;
	grid-auto-columns: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 16px;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;
	background-color: #fff;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
`;

export const TextInput = styled.input`
	width: 100%;
	height: 32px;
	padding: 0 8px;
	border: 2px solid #888;
	border-radius: 4px;
	text-overflow: ellipsis;
	transition: box-shadow 300ms cubic-bezier(0.25, 0.85, 0.25, 1),
		border 300ms cubic-bezier(0.25, 0.85, 0.25, 1);

	&:hover {
		border-color: #1ec6ea;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
	}

	&:focus {
		outline-width: 0px;
		border-color: #1ec6ea;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
	}
`;

export const ButtonBlock = styled.div`
	display: flex;
	margin-top: 24px;
	justify-content: start;

	.save-button {
		margin-right: 20px;
	}
`;
