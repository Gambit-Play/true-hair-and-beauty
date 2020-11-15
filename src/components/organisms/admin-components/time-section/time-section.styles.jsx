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
	display: grid;
	padding: 20px;
	flex-direction: column;
	justify-content: space-between;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-template-areas:
		'zondag maandag'
		'dinsdag woensdag'
		'donderdag vrijdag'
		'zaterdag .'
		'buttons buttons';
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	background-color: #fff;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.23);

	.input-block {
		padding-bottom: 16px;
	}
`;

export const FormActionBlock = styled.div`
	grid-area: buttons;
	display: flex;
	justify-content: flex-start;
	margin-top: 20px;

	.save-button {
		margin-right: 20px;
	}
`;
