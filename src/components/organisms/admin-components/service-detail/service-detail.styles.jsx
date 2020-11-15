import styled from 'styled-components';

export const FormLayout = styled.div`
	display: grid;
	padding: 20px;
	width: 100%;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-areas:
		'image form'
		'services services';
	grid-template-columns: 0.3fr 1fr;
	grid-template-rows: auto auto;
`;

export const FormImage = styled.div`
	grid-area: image;
	background-image: url(${props => props.image});
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);
`;

export const FormCard = styled.div`
	grid-area: form;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);
`;

export const InputLayoutTop = styled.div`
	display: grid;
	width: 100%;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 24px;
	grid-template-areas:
		'title image-url'
		'order .';
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
`;

export const InputLayoutBottom = styled.div`
	display: grid;
	width: 100%;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 24px;
	grid-template-areas:
		'service1 .'
		'service2 .'
		'service3 .'
		'button-block button-block';
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto auto;
`;

export const FormActionBlock = styled.div`
	grid-area: button-block;
	display: flex;
	justify-content: ${props =>
		props.deleteButton ? 'space-between' : 'flex-start'};
	margin-top: 20px;

	.button-block {
		display: flex;
	}

	.save-button {
		margin-right: 20px;
	}

	.delete-button {
		background-image: linear-gradient(45deg, #ff416c, #ff4b2b);
	}
`;

export const Divider = styled.div`
	height: 1px;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: #afafaf;
`;

export const ListLayout = styled.div`
	grid-area: services;
	background-color: #fff;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);
`;

export const ListTopBar = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	align-items: center;
`;

export const ListRowLabels = styled.div`
	display: grid;
	padding: 20px;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-template-columns: 0.3fr 1fr 0.3fr 1.2fr;
	grid-template-rows: auto;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	background-color: #fcfcfc;
	color: #888;
	font-size: 12px;
	font-weight: 500;
	text-transform: uppercase;
`;

export const ListItem = styled.div`
	display: grid;
	padding: 20px;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-template-columns: 0.3fr 1fr 0.3fr 1.2fr;
	grid-template-rows: auto;
	border-bottom: 1px solid #dedede;
	font-size: 18px;
`;

export const ListTitle = styled.div`
	font-size: 24px;
	line-height: 1.25;
	font-weight: 500;
`;

export const ListActionBlock = styled.div`
	display: flex;
	justify-content: flex-end;

	.delete-text {
		color: red;
	}

	.edit-button {
		background-image: linear-gradient(45deg, #11998e, #38ef7d);
		font-size: 14px;
	}

	.delete-button {
		margin-left: 20px;
		background-image: linear-gradient(45deg, #ff416c, #ff4b2b);
		font-size: 14px;
	}

	.save-button {
		background-image: linear-gradient(225deg, #1de9b8, #1ec6ea);
		padding: 6px 16px;
		font-size: 14px;
	}

	.cancel-button {
		margin-left: 20px;
		padding: 6px 16px;
		border-style: solid;
		border-width: 2px;
		border-color: #1ec6ea;
		background-image: none;
		color: #1ec6ea;
		font-size: 14px;
	}
`;

export const NewItemBlock = styled.div`
	display: flex;
	align-items: center;

	.new-input {
		width: 200px;
		margin-right: 16px;
	}

	.new-button {
		margin-right: 16px;
	}
`;
