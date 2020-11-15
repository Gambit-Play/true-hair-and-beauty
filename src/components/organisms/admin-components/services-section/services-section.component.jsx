import React, { Fragment } from 'react';
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
import { RoundButton } from './services-section.styles';

// Images
import editIcon from '../../../../assets/edit.svg';
import plusIcon from '../../../../assets/plus.svg';

const ServicesSection = ({
	currentServices,
	fetchServiceStart,
	clearService,
	newServiceStart,
}) => {
	const history = useHistory();
	const { url } = useRouteMatch();

	return (
		<Fragment>
			{currentServices.map(({ typeOfService, image, id }, index) => (
				<Card key={id}>
					<CardImage image={image} />
					<CardTitle> {typeOfService} </CardTitle>
					<CardRoundButton
						onClick={() => {
							fetchServiceStart(index, true);
							history.push(`${url}/${id}`);
						}}
					>
						<img src={editIcon} alt='' />
					</CardRoundButton>
				</Card>
			))}
			<RoundButton
				onClick={() => {
					newServiceStart();
					history.push(`${url}/new-service`);
				}}
			>
				<img src={plusIcon} alt='' />
			</RoundButton>
		</Fragment>
	);
};

export default compose(WithServiceDetail, WithServices)(ServicesSection);
