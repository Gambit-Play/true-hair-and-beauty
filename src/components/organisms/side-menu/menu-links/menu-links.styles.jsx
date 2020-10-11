import styled from 'styled-components';

export const LinkBlock = styled.div`
	display: flex;
	margin-top: 40px;
	margin-right: 20px;
	margin-left: 20px;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	.menu-link {
		display: flex;
		width: 70px;
		height: 70px;
		padding: 12px;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		background-color: rgba(247, 104, 104, 0.1);
		transition: transform 100ms ease-in-out, box-shadow 200ms ease-in-out,
			background-color 200ms ease-in-out;

		&:active {
			transform: scale(0.9);
		}
	}

	.menu-link.on-hover {
		background-color: #f76868;
		box-shadow: 0 15px 24px 0 rgba(247, 104, 104, 0.3);
	}

	.menu-link-text {
		margin-top: 16px;
		color: #a4a6ad;
		font-size: 14px;
		font-weight: 700;
		text-align: center;
		transition: color 200ms ease-in-out;
	}

	.menu-link-text.on-hover {
		color: #f76868;
	}
`;
