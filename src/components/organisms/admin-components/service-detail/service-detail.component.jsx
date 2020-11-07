import React from 'react';
import { compose } from 'redux';

//HOC
import WithServices from '../../../HOC/with-services.hoc';
import WithServiceDetail from '../../../HOC/with-service-detail.hoc';

// Component
import FormCard from '../services-section/form-card/form-card.component';
import ListCard from '../services-section/list-card/list-card.component';
import { FormLayout, FormImage } from './service-detail.styles';

const ServiceDetail = ({
	currentServices,
	serviceDetail,
	updateServicesStart,
	deleteServicesStart,
	addNewServicesStart,
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
		title,
		price,
		order,
		service1,
		service2,
		service3,
	} = serviceDetail;

	const mainIndex = currentServices.findIndex(service => service.id === id);

	return (
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
	);
};

export default compose(WithServiceDetail, WithServices)(ServiceDetail);

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
