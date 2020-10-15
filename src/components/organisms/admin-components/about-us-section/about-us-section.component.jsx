import React from 'react';

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

const AboutUsSection = () => {
	return (
		<Card>
			<CardImage image={aboutUsImage} />
			<CardContentWrapper>
				<CardTitle>Title</CardTitle>
				<CardInput
					type='text'
					id='about-us-title'
					name='about-us-title'
				/>
				<CardDivider />
				<CardTitle>Body</CardTitle>
				<CardTextArea
					type='text'
					id='about-us-body'
					name='about-us-body'
				/>
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	);
};

export default AboutUsSection;
