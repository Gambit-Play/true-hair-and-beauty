import React from 'react';

// Component
import {
	Card,
	CardImage,
	CardContentWrapper,
	CardTitle,
	CardInput,
	CardDivider,
	CardButton,
	CardButtonBlock,
} from '../card-components/card.styles';

// Images
import headerImage from '../../../../assets/time-screenshot.png';

const TimeSection = () => {
	return (
		<Card>
			<CardImage image={headerImage} />
			<CardContentWrapper>
				<CardTitle>Zondag</CardTitle>
				<CardInput type='text' id='zondag' name='zondag' />
				<CardDivider />
				<CardTitle>Maandag</CardTitle>
				<CardInput type='text' id='maandag' name='maandag' />
				<CardDivider />
				<CardTitle>Dinsdag</CardTitle>
				<CardInput type='text' id='dinsdag' name='dinsdag' />
				<CardDivider />
				<CardTitle>Woensdag</CardTitle>
				<CardInput type='text' id='woensdag' name='woensdag' />
				<CardDivider />
				<CardTitle>Donderdag</CardTitle>
				<CardInput type='text' id='donderdag' name='donderdag' />
				<CardDivider />
				<CardTitle>Vrijdag</CardTitle>
				<CardInput type='text' id='vrijdag' name='vrijdag' />
				<CardDivider />
				<CardTitle>Zaterdag</CardTitle>
				<CardInput type='text' id='zaterdag' name='zaterdag' />
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	);
};

export default TimeSection;

// FIXME:
// <CardNumberInput
// value={number}
// onValueChange={({ floatValue }) => {
// 	console.log(
// 		'@@@@@ NumberFormat - floatValue:',
// 		floatValue
// 	);
// }}
// />
