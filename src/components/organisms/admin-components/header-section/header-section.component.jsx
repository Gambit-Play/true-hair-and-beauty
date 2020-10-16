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
} from '../card-components/card.styles';

// Images
import headerImage from '../../../../assets/header-screenshot.png';

const HeaderSection = ({ currentContent }) => {
	const { id, topText, bottomText } = currentContent.headerSection;

	return (
		<Card>
			<CardImage image={headerImage} />
			<CardContentWrapper>
				<CardTitle>Top Title</CardTitle>
				<CardInput value={topText} type='text' id={id} name='topText' />
				<CardDivider />
				<CardTitle>Bottom Title</CardTitle>
				<CardInput
					value={bottomText}
					type='text'
					id={id}
					name='bottomText'
				/>
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	);
};

export default compose(WithContent)(HeaderSection);
