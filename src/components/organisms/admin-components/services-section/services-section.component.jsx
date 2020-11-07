import React from 'react';
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
import FormCard from './form-card/form-card.component';
import ListCard from './list-card/list-card.component';
import { FormLayout, FormImage } from '../service-detail/service-detail.styles';

const ServicesSection = ({
	currentServices,
	serviceDetail,
	fetchServiceStart,
	updateServicesStart,
	deleteServicesStart,
	addNewServicesStart,
	setServiceStart,
	setOtherServiceStart,
	setNewServiceStart,
	clearService,
	clearNewService
}) => {
	const {
		id,
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

	const mainIndex = currentServices.findIndex(service => service.id === id);

	return isEdit ? (
		<FormLayout>
			<FormImage image={image} />
			<FormCard
				clearService={clearService}
				image={image}
				order={order}
				service1={service1}
				service2={service2}
				service3={service3}
				setNewServiceStart={setNewServiceStart}
				setOtherServiceStart={setOtherServiceStart}
				typeOfService={typeOfService}
				updateServicesStart={updateServicesStart}
			/>
			<ListCard
				mainIndex={mainIndex}
				price={price}
				services={services}
				title={title}
				setNewServiceStart={setNewServiceStart}
				addNewServicesStart={addNewServicesStart}
				deleteServicesStart={deleteServicesStart}
				clearNewService={clearNewService}
			/>
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
