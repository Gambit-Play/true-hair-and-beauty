import React, { Fragment } from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';
import WithHeaderDetail from '../../../HOC/with-header-detail.hoc';

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
import headerImage from '../../../../assets/header-screenshot.png';

const HeaderSection = ({
	headerSection,
	headerDetail,
	fetchHeaderStart,
	setHeaderStart,
	clearHeader,
	isEdit,
}) => {
	const { topText, bottomText } = headerSection;

	return (
		<Card>
			<CardImage image={headerImage} />
			<CardContentWrapper>
				<CardTitle>Top Title</CardTitle>
				{isEdit ? (
					<CardInput
						value={headerDetail.topText}
						type='text'
						id={headerDetail.id}
						name='topText'
						onChange={event => {
							setHeaderStart(
								event.target.name,
								event.target.value
							);
						}}
					/>
				) : (
					<CardBody>{topText}</CardBody>
				)}
				<CardDivider />
				<CardTitle>Bottom Title</CardTitle>
				{isEdit ? (
					<CardInput
						value={headerDetail.bottomText}
						type='text'
						id={headerDetail.id}
						name='bottomText'
						onChange={event => {
							setHeaderStart(
								event.target.name,
								event.target.value
							);
						}}
					/>
				) : (
					<CardBody>{bottomText}</CardBody>
				)}
			</CardContentWrapper>
			<CardButtonBlock>
				{isEdit ? (
					<Fragment>
						<CardButton>Update</CardButton>
						<CardButton outline onClick={clearHeader}>
							Cancel
						</CardButton>
					</Fragment>
				) : (
					<CardButton onClick={fetchHeaderStart}>Edit</CardButton>
				)}
			</CardButtonBlock>
		</Card>
	);
};

export default compose(WithHeaderDetail, WithContent)(HeaderSection);
