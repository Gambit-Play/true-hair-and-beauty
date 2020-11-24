import styled from 'styled-components';

export const LinkBlock = styled.div`
	display: flex;
	height: 50px;
	padding-left: 16px;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.14);
	color: #333;
	transition: border-left 100ms ease-in-out;
	border-left: ${props => (props.isActive ? '4px solid #fff' : 'none')};
	cursor: pointer;

	&:hover {
		border-left: 4px solid #fff;
	}

	.menu-link-text {
		transition: color 100ms ease-in-out;
		color: #333;
	}

	.menu-link-text.on-hover {
		color: #fff;
	}
`;
