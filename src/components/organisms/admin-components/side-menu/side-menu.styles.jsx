import styled from 'styled-components';

export const MainWrapper = styled.div`
	display: flex;
	width: 200px;
	flex-direction: column;
	justify-content: space-between;
	background-image: linear-gradient(180deg, #1de9b8, #1ec6ea);

	.links-wrapper {
		height: 100%;
	}

	.log-out {
		display: flex;
		padding-right: 18px;
		padding-bottom: 40px;
		padding-left: 18px;
		justify-content: center;
		align-items: center;
	}
`;

export const LogOutButton = styled.a`
	display: flex;
	width: 100%;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border-style: solid;
	border-width: 2px;
	border-color: #fff;
	border-radius: 4px;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
	transition: box-shadow 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
	color: #fff;
	line-height: 1.25;
	font-weight: 500;
	text-decoration: none;
	text-transform: capitalize;

	&:hover {
		box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);
	}

	&:active {
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23);
	}
`;

export const LogoBlock = styled.div`
	display: flex;
	height: 120px;
	padding-top: 20px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.14);

	img {
		height: 48px;
	}
`;
