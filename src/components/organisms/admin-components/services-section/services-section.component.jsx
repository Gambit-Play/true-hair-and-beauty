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
	CardInput,
	CardNumberInput,
	CardDivider,
	CardButton,
	CardAddButton,
	CardButtonBlock,
} from '../card-components/card.styles';

const ServicesSection = ({
	currentServices,
	serviceDetail,
	fetchServiceStart,
	updateServicesStart,
	addNewServicesStart,
	setServiceStart,
	setOtherServiceStart,
	setNewServiceStart,
	clearService,
}) => {
	const {
		image,
		services,
		typeOfService,
		isEdit,
		title,
		price,
	} = serviceDetail;

	return isEdit ? (
		<Fragment>
			<Card>
				<CardImage image={image} />
				<CardInput
					value={image}
					type='text'
					name='image'
					onChange={event =>
						setOtherServiceStart(
							event.target.name,
							event.target.value
						)
					}
				/>
				<CardInput
					titleInput
					value={typeOfService}
					type='text'
					name='typeOfService'
					onChange={event =>
						setOtherServiceStart(
							event.target.name,
							event.target.value
						)
					}
				/>
				<CardContentWrapper>
					{services.map((service, serviceIndex) => (
						<Fragment key={serviceIndex}>
							<CardInput
								value={service.title}
								type='text'
								name='title'
								onChange={event =>
									setServiceStart(
										serviceIndex,
										event.target.name,
										event.target.value
									)
								}
							/>
							<CardNumberInput
								value={service.price}
								onValueChange={({ floatValue }) => {
									setServiceStart(
										serviceIndex,
										'price',
										floatValue
									);
								}}
							/>
							<CardDivider />
						</Fragment>
					))}
				</CardContentWrapper>
				<CardButtonBlock>
					<CardButton onClick={updateServicesStart}>
						Update
					</CardButton>
					<CardButton outline onClick={clearService}>
						Cancel
					</CardButton>
				</CardButtonBlock>
			</Card>

			{/* New Service */}
			<Card padding>
				<CardInput
					value={title}
					placeholder='Title'
					type='text'
					name='title'
					onChange={event =>
						setNewServiceStart(
							event.target.name,
							event.target.value
						)
					}
				/>
				<CardNumberInput
					value={price ? price : null}
					placeholder='Price'
					onValueChange={({ floatValue }) => {
						setNewServiceStart('price', floatValue);
					}}
				/>
				<CardDivider />
				<CardAddButton
					isActive={price && title}
					onClick={() => price && title && addNewServicesStart()}
				>
					Add
				</CardAddButton>
			</Card>
		</Fragment>
	) : (
		currentServices.map(({ services, typeOfService, image }, index) => (
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
