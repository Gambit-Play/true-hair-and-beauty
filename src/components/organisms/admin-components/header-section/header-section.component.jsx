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
	fetchHeaderStart,
	clearHeader,
	isEdit,
}) => {
	const { id, topText, bottomText } = headerSection;

	return (
		<Card>
			<CardImage image={headerImage} />
			<CardContentWrapper>
				<CardTitle>Top Title</CardTitle>
				{isEdit ? (
					<CardInput
						value={topText}
						type='text'
						id={id}
						name='topText'
					/>
				) : (
					<CardBody>{topText}</CardBody>
				)}
				<CardDivider />
				<CardTitle>Bottom Title</CardTitle>
				{isEdit ? (
					<CardInput
						value={bottomText}
						type='text'
						id={id}
						name='bottomText'
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
