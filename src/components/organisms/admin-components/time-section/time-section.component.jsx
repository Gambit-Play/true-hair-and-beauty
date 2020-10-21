import React, { Fragment } from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';
import WithTimeDetail from '../../../HOC/with-time-detail.hoc';

// Component
import {
	Card,
	CardImage,
	CardContentWrapper,
	CardTitle,
	CardBody,
	CardInput,
	CardDivider,
	CardButton,
	CardButtonBlock,
} from '../card-components/card.styles';

// Images
import headerImage from '../../../../assets/time-screenshot.png';

const TimeSection = ({
	timeSection,
	timeDetail,
	isEdit,
	clearTime,
	fetchTimeStart,
}) => {
	const {
		maandag,
		dinsdag,
		woensdag,
		donderdag,
		vrijdag,
		zaterdag,
		zondag,
	} = timeSection;

	return (
		<Card>
			<CardImage image={headerImage} />
			<CardContentWrapper>
				<CardTitle>Zondag</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={zondag}
						name='zondag'
						value={timeDetail.zondag}
					/>
				) : (
					<CardBody>{zondag.time}</CardBody>
				)}

				<CardDivider />
				<CardTitle>Maandag</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={maandag}
						name='maandag'
						value={timeDetail.maandag}
					/>
				) : (
					<CardBody>{maandag.time}</CardBody>
				)}
				<CardDivider />
				<CardTitle>Dinsdag</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={dinsdag}
						name='dinsdag'
						value={timeDetail.dinsdag}
					/>
				) : (
					<CardBody>{dinsdag.time}</CardBody>
				)}
				<CardDivider />
				<CardTitle>Woensdag</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={woensdag}
						name='woensdag'
						value={timeDetail.woensdag}
					/>
				) : (
					<CardBody>{woensdag.time}</CardBody>
				)}

				<CardDivider />
				<CardTitle>Donderdag</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={donderdag}
						name='donderdag'
						value={timeDetail.donderdag}
					/>
				) : (
					<CardBody>{donderdag.time}</CardBody>
				)}

				<CardDivider />
				<CardTitle>Vrijdag</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={vrijdag}
						name='vrijdag'
						value={timeDetail.vrijdag}
					/>
				) : (
					<CardBody>{vrijdag.time}</CardBody>
				)}

				<CardDivider />
				<CardTitle>Zaterdag</CardTitle>
				{isEdit ? (
					<CardInput
						type='text'
						id={zaterdag}
						name='zaterdag'
						value={timeDetail.zaterdag}
					/>
				) : (
					<CardBody>{zaterdag.time}</CardBody>
				)}
			</CardContentWrapper>
			<CardButtonBlock>
				{isEdit ? (
					<Fragment>
						<CardButton>Update</CardButton>
						<CardButton outline onClick={clearTime}>
							Cancel
						</CardButton>
					</Fragment>
				) : (
					<CardButton onClick={fetchTimeStart}>Edit</CardButton>
				)}
			</CardButtonBlock>
		</Card>
	);
};

export default compose(WithTimeDetail, WithContent)(TimeSection);
