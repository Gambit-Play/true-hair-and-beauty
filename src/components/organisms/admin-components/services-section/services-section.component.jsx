import React, { Fragment } from 'react';
import { compose } from 'redux';

//HOC
import WithServices from '../../../HOC/with-services.hoc';
import WithServiceDetail from '../../../HOC/with-service-detail.hoc';

// Component
import {
	Card,
	CardServiceTitle,
	CardImage,
	CardContentWrapper,
	CardTitle,
	CardBody,
	CardNumberInput,
	CardDivider,
	CardButton,
	CardButtonBlock,
} from '../card-components/card.styles';

const ServicesSection = ({
	currentServices,
	serviceDetail,
	fetchServiceStart,
	clearService,
}) => {
	const { id, image, services, typeOfService, isEdit } = serviceDetail;

	return isEdit ? (
		<Card>
			<CardImage image={image} />
			<CardServiceTitle>{typeOfService}</CardServiceTitle>
			<CardContentWrapper>
				{services.map((service, serviceIndex) => (
					<Fragment key={serviceIndex}>
						<CardTitle>{service.title}</CardTitle>
						<CardNumberInput
							value={service.price}
							onValueChange={value => {
								console.log(
									'@@@@@ NumberFormat - value:',
									value
								);
							}}
						/>
						<CardDivider />
					</Fragment>
				))}
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline onClick={clearService}>
					Cancel
				</CardButton>
			</CardButtonBlock>
		</Card>
	) : (
		currentServices.map(({ id, services, typeOfService, image }, index) => (
			<Card key={index}>
				<CardImage image={image} />
				<CardServiceTitle>{typeOfService}</CardServiceTitle>
				<CardContentWrapper>
					{services.map((service, serviceIndex) => (
						<Fragment key={serviceIndex}>
							<CardTitle>{service.title}</CardTitle>
							<CardBody>{service.price}</CardBody>
							<CardDivider />
						</Fragment>
					))}
				</CardContentWrapper>
				<CardButtonBlock>
					<CardButton onClick={() => fetchServiceStart(index, true)}>
						Edit
					</CardButton>
				</CardButtonBlock>
			</Card>
		))
	);
};

export default compose(WithServiceDetail, WithServices)(ServicesSection);
