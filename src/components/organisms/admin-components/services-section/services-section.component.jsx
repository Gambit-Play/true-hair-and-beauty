import React, { Fragment } from 'react';
import { compose } from 'redux';

//HOC
import WithServices from '../../../HOC/with-services.hoc';
import WithServiceDetail from '../../../HOC/with-service-detail.hoc';

// Component
// import {
// 	Card,
// 	CardServiceTitle,
// 	CardImage,
// 	CardContentWrapper,
// 	CardTitle,
// 	CardBody,
// 	CardInput,
// 	CardNumberInput,
// 	CardDivider,
// 	CardButton,
// 	CardAddButton,
// 	CardButtonBlock,
// } from '../card-components/card.styles';
import {
	Card,
	CardImage,
	CardRoundButton,
	CardTitle,
} from '../card/card.styles';
import { Button } from '../../../atoms/button/button.styles';
import {
	FormLayout,
	FormImage,
	FormCard,
	Divider,
	InputLayoutBottom,
	InputLayoutTop,
	InputBlock,
	TextInput,
	InputLabel,
	NumberInput,
	ListLayout,
	ListTopBar,
	ListRowLabels,
	ListItem,
	ListTitle,
	NewItemBlock,
	ListActionBlock,
	FormActionBlock,
} from '../service-detail/service-detail.styles';

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
		order,
		service1,
		service2,
		service3,
	} = serviceDetail;

	// return isEdit ? (
	// 	<Fragment></Fragment>
	// ) : (
	// 	currentServices.map(({ services, typeOfService, image }, index) => (
	// 		<Card key={index}>
	// 			<CardImage image={image} />
	// 			<CardTitle> {typeOfService} </CardTitle>
	// 			<CardRoundButton></CardRoundButton>
	// 		</Card>
	// 	))
	// );

	return isEdit ? (
		<FormLayout>
			<FormImage image={image} />
			<FormCard>
				<InputLayoutTop>
					<InputBlock gridArea='title'>
						<InputLabel onClick={clearService}>Title:</InputLabel>
						<TextInput
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
					</InputBlock>
					<InputBlock gridArea='image-url'>
						<InputLabel>Image Url:</InputLabel>
						<TextInput
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
					</InputBlock>
					<InputBlock gridArea='order'>
						<InputLabel>Order:</InputLabel>
						<NumberInput
							value={order}
							onValueChange={({ floatValue }) => {
								setNewServiceStart('order', floatValue);
							}}
						/>
					</InputBlock>
				</InputLayoutTop>
				<Divider />
				<InputLayoutBottom>
					<InputBlock gridArea='service1'>
						<InputLabel>Service #1:</InputLabel>
						<NumberInput
							value={service1}
							onValueChange={({ value }) => {
								setNewServiceStart('service1', value);
							}}
						/>
					</InputBlock>
					<InputBlock gridArea='service2'>
						<InputLabel>Service #2:</InputLabel>
						<NumberInput
							value={service2}
							onValueChange={({ value }) => {
								setNewServiceStart('service2', value);
							}}
						/>
					</InputBlock>
					<InputBlock gridArea='service3'>
						<InputLabel>Service #3:</InputLabel>
						<NumberInput
							value={service3}
							onValueChange={({ value }) => {
								setNewServiceStart('service3', value);
							}}
						/>
					</InputBlock>
					<FormActionBlock>
						<Button className='save-button'>save</Button>
						<Button outlined onClick={clearService}>
							cancel
						</Button>
					</FormActionBlock>
				</InputLayoutBottom>
			</FormCard>
			<ListLayout>
				<ListTopBar>
					<ListTitle>Services</ListTitle>
					<NewItemBlock>
						<TextInput
							className='new-input'
							placeholder='Service Name'
							name='title'
							onChange={event =>
								setNewServiceStart(
									event.target.name,
									event.target.value
								)
							}
						/>
						<NumberInput
							className='new-input'
							value={price ? price : null}
							placeholder='Price'
							onValueChange={({ floatValue }) => {
								setNewServiceStart('price', floatValue);
							}}
						/>
						<Button className='new-button'>save</Button>
						<Button outlined onClick={clearService}>
							cancel
						</Button>
					</NewItemBlock>
					<Button>New Service</Button>
				</ListTopBar>
				<ListRowLabels>
					<div>Number</div>
					<div>Service Name</div>
					<div>Price</div>
				</ListRowLabels>
				{services.map((service, serviceIndex) => (
					<ListItem key={serviceIndex}>
						<div># {serviceIndex}</div>
						<div>{service.title}</div>
						<div>€{service.price}</div>
						<ListActionBlock>
							<Button className='edit-button'>edit</Button>
							<Button className='delete-button'>delete</Button>
						</ListActionBlock>
					</ListItem>
				))}
			</ListLayout>
		</FormLayout>
	) : (
		currentServices.map(({ typeOfService, image }, index) => (
			<Card key={index}>
				<CardImage image={image} />
				<CardTitle> {typeOfService} </CardTitle>
				<CardRoundButton
					onClick={() => fetchServiceStart(index, true)}
				></CardRoundButton>
			</Card>
		))
	);
};

export default compose(WithServiceDetail, WithServices)(ServicesSection);

// isEdit ? (
// 	<Fragment>
// 		<Card>
// 			<CardImage image={image} />
// 			<CardInput
// 				value={image}
// 				type='text'
// 				name='image'
// 				onChange={event =>
// 					setOtherServiceStart(
// 						event.target.name,
// 						event.target.value
// 					)
// 				}
// 			/>
// 			<CardInput
// 				titleInput
// 				value={typeOfService}
// 				type='text'
// 				name='typeOfService'
// 				onChange={event =>
// 					setOtherServiceStart(
// 						event.target.name,
// 						event.target.value
// 					)
// 				}
// 			/>
// 			<CardContentWrapper>
// 				{services.map((service, serviceIndex) => (
// 					<Fragment key={serviceIndex}>
// 						<CardInput
// 							value={service.title}
// 							type='text'
// 							name='title'
// 							onChange={event =>
// 								setServiceStart(
// 									serviceIndex,
// 									event.target.name,
// 									event.target.value
// 								)
// 							}
// 						/>
// 						<CardNumberInput
// 							value={service.price}
// 							onValueChange={({ floatValue }) => {
// 								setServiceStart(
// 									serviceIndex,
// 									'price',
// 									floatValue
// 								);
// 							}}
// 						/>
// 						<CardDivider />
// 					</Fragment>
// 				))}
// 			</CardContentWrapper>
// 			<CardButtonBlock>
// 				<CardButton onClick={updateServicesStart}>
// 					Update
// 				</CardButton>
// 				<CardButton outline onClick={clearService}>
// 					Cancel
// 				</CardButton>
// 			</CardButtonBlock>
// 		</Card>

// 		{/* New Service */}
// 		<Card padding>
// 			<CardInput
// 				value={title}
// 				placeholder='Title'
// 				type='text'
// 				name='title'
// 				onChange={event =>
// 					setNewServiceStart(
// 						event.target.name,
// 						event.target.value
// 					)
// 				}
// 			/>
// 			<CardNumberInput
// 				value={price ? price : null}
// 				placeholder='Price'
// 				onValueChange={({ floatValue }) => {
// 					setNewServiceStart('price', floatValue);
// 				}}
// 			/>
// 			<CardDivider />
// 			<CardAddButton
// 				isActive={price && title}
// 				onClick={() => price && title && addNewServicesStart()}
// 			>
// 				Add
// 			</CardAddButton>
// 		</Card>
// 	</Fragment>
// ) : (
// 	currentServices.map(({ services, typeOfService, image }, index) => (
// 		<Card key={index}>
// 			<CardImage image={image} />
// 			<CardServiceTitle>{typeOfService}</CardServiceTitle>
// 			<CardContentWrapper>
// 				{services.map((service, serviceIndex) => (
// 					<Fragment key={serviceIndex}>
// 						<CardTitle>{service.title}</CardTitle>
// 						<CardBody>{service.price}</CardBody>
// 						<CardDivider />
// 					</Fragment>
// 				))}
// 			</CardContentWrapper>
// 			<CardButtonBlock>
// 				<CardButton onClick={() => fetchServiceStart(index, true)}>
// 					Edit
// 				</CardButton>
// 			</CardButtonBlock>
// 		</Card>
// 	))
// );
