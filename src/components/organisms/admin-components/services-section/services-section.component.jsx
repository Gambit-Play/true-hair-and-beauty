import React from 'react';

// Component
import {
	Card,
	CardServiceTitle,
	CardContentWrapper,
	CardTitle,
	CardNumberInput,
	CardDivider,
	CardButton,
	CardButtonBlock,
} from '../card-components/card.styles';

const ServicesSection = () => {
	return (
		<Card>
			<CardServiceTitle>Verven</CardServiceTitle>
			<CardContentWrapper>
				<CardTitle>Kleur</CardTitle>
				<CardNumberInput
					value={299}
					onValueChange={({ floatValue }) => {
						console.log(
							'@@@@@ NumberFormat - floatValue:',
							floatValue
						);
					}}
				/>
				<CardDivider />
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	);
};

export default ServicesSection;
