import styled from 'styled-components';

export const LoaderContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #333;

	.loader-text {
		margin-top: 5vh;
		color: #f1f2f2;
		font-size: 24px;
		line-height: 1.25;
		font-weight: 700;
		letter-spacing: 8px;
		text-transform: uppercase;
	}
`;
