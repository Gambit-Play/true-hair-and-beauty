import React from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';

// Component
import {
	Card,
	CardImage,
	CardContentWrapper,
	CardTitle,
	CardInput,
	CardDivider,
	CardButton,
	CardButtonBlock,
	CardTextArea,
} from '../card-components/card.styles';

// Images
import aboutUsImage from '../../../../assets/about-us-screenshot.png';

const AboutUsSection = ({ currentContent }) => {
	const { id, title, body } = currentContent.aboutUsSection;

	return (
		<Card>
			<CardImage image={aboutUsImage} />
			<CardContentWrapper>
				<CardTitle>Title</CardTitle>
				<CardInput value={title} type='text' id={id} name='title' />
				<CardDivider />
				<CardTitle>Body</CardTitle>
				<CardTextArea
					height={200}
					value={body}
					type='text'
					id={id}
					name='body'
				/>
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	);
};

export default compose(WithContent)(AboutUsSection);
