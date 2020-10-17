import React, { Fragment } from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';
import WithAboutUsDetail from '../../../HOC/with-about-us-detail.hoc';

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
	CardTextArea,
} from '../card-components/card.styles';

// Images
import aboutUsImage from '../../../../assets/about-us-screenshot.png';

const AboutUsSection = ({
	currentContent,
	fetchAboutUsStart,
	clearAboutUs,
	isEdit,
}) => {
	const { id, title, body } = currentContent.aboutUsSection;

	return (
		<Card>
			<CardImage image={aboutUsImage} />
			<CardContentWrapper>
				<CardTitle>Title</CardTitle>
				{isEdit ? (
					<CardInput value={title} type='text' id={id} name='title' />
				) : (
					<CardBody>{title}</CardBody>
				)}
				<CardDivider />
				<CardTitle>Body</CardTitle>
				{isEdit ? (
					<CardTextArea
						height={200}
						value={body}
						type='text'
						id={id}
						name='body'
					/>
				) : (
					<CardBody>{body}</CardBody>
				)}
			</CardContentWrapper>
			<CardButtonBlock>
				{isEdit ? (
					<Fragment>
						<CardButton>Update</CardButton>
						<CardButton outline onClick={clearAboutUs}>
							Cancel
						</CardButton>
					</Fragment>
				) : (
					<CardButton onClick={fetchAboutUsStart}>Edit</CardButton>
				)}
			</CardButtonBlock>
		</Card>
	);
};

export default compose(WithAboutUsDetail, WithContent)(AboutUsSection);
