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
} from '../card-components/card.styles';

// Images
import headerImage from '../../../../assets/header-screenshot.png';

const HeaderSection = () => {
	return (
		<Card>
			<CardImage image={headerImage} />
			<CardContentWrapper>
				<CardTitle>Top Title</CardTitle>
				<CardInput type='text' id='top-title' name='top-title' />
				<CardDivider />
				<CardTitle>Bottom Title</CardTitle>
				<CardInput type='text' id='bottom-title' name='bottom-title' />
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	);
};

export default HeaderSection;
