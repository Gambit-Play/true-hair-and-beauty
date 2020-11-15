import styled from 'styled-components';

export const ContentLayout = styled.div`
	display: grid;
	width: 100%;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-areas:
		'title title'
		'image form';
	grid-template-columns: 0.5fr 1fr;
	grid-template-rows: auto;
`;

export const ContentTitle = styled.div`
	grid-area: title;
	font-size: 32px;
`;

export const ContentImage = styled.div`
	grid-area: image;
	background-image: url(${props => props.image});
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);
`;

export const ContentCard = styled.div`
	grid-area: form;
	min-height: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);

	.input-block {
		padding-bottom: 16px;
	}
`;

export const CardTextArea = styled.textarea`
	width: 100%;
	height: 200px;
	padding: 8px;
	border: 2px solid #888;
	border-radius: 4px;
	text-overflow: ellipsis;
	resize: vertical;
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

export const FormActionBlock = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-top: 20px;

	.save-button {
		margin-right: 20px;
	}
`;
