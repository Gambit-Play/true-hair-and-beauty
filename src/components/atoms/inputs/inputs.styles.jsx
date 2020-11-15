import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const InputBlock = styled.div`
	grid-area: ${props => props.gridArea};
`;

export const InputLabel = styled.div`
	margin-bottom: 4px;
	color: #888;
	font-size: 12px;
	line-height: 1.25;
	font-weight: 700;
	text-transform: uppercase;
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

export const NumberInput = styled(NumberFormat)`
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
