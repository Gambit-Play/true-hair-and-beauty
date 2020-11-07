import React from 'react';
import { compose } from 'redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

//HOC
import WithServices from '../../../HOC/with-services.hoc';
import WithServiceDetail from '../../../HOC/with-service-detail.hoc';

// Component
import {
	Card,
	CardImage,
	CardRoundButton,
	CardTitle,
} from '../card/card.styles';

const ServicesSection = ({ currentServices, fetchServiceStart }) => {
	const history = useHistory();
	const { url } = useRouteMatch();

	return currentServices.map(({ typeOfService, image, id }, index) => (
		<Card key={index}>
			<CardImage image={image} />
			<CardTitle> {typeOfService} </CardTitle>
			<CardRoundButton
				onClick={() => {
					fetchServiceStart(index, true);
					history.push(`${url}/${id}`);
				}}
			></CardRoundButton>
		</Card>
	));
};

export default compose(WithServiceDetail, WithServices)(ServicesSection);
