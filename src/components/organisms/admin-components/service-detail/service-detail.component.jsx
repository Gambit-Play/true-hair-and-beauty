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
	createServicesStart,
	updateServicesStart,
	deleteMainServicesStart,
	deleteServiceStart,
	addNewServicesStart,
	setOtherServiceStart,
	setNewServiceStart,
	clearService,
	clearNewService,
	isNew,
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
				isNew={isNew}
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
				createServicesStart={createServicesStart}
				deleteMainServicesStart={deleteMainServicesStart}
			/>
			{!isNew && (
				<ListCard
					mainIndex={mainIndex}
					price={price}
					services={services}
					title={title}
					setNewServiceStart={setNewServiceStart}
					addNewServicesStart={addNewServicesStart}
					deleteServiceStart={deleteServiceStart}
					clearNewService={clearNewService}
				/>
			)}
		</FormLayout>
	);
};

export default compose(WithServiceDetail, WithServices)(ServiceDetail);
