import styled from 'styled-components';

export const MainWrapper = styled.div`
	display: flex;
	height: 100vh;
	grid-auto-columns: 1fr;
	grid-template-columns: 0.25fr 1fr;
	grid-template-rows: auto;
	background-color: #f8fbff;
`;

export const AdminView = styled.div`
	padding: 40px;
	flex: 1;
	overflow: scroll;
`;
