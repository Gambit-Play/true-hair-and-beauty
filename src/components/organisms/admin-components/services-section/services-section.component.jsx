import React, { Fragment } from 'react';
import { compose } from 'redux';

//HOC
import WithServices from '../../../HOC/with-services.hoc';

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

const ServicesSection = ({ currentServices }) => {
	return currentServices.map(({ id, services, typeOfService }, index) => (
		<Card key={index}>
			<CardServiceTitle>{typeOfService}</CardServiceTitle>
			<CardContentWrapper>
				{services.map((service, serviceIndex) => (
					<Fragment key={serviceIndex}>
						<CardTitle>{service.title}</CardTitle>
						<CardNumberInput
							value={service.price}
							onValueChange={({ floatValue }) => {
								console.log(
									'@@@@@ NumberFormat - floatValue:',
									floatValue
								);
							}}
						/>
						<CardDivider />
					</Fragment>
				))}
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	));
};

export default compose(WithServices)(ServicesSection);
