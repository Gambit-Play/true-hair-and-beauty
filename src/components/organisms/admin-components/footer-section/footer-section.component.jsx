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
import footerImage from '../../../../assets/footer-screenshot.png';

const FooterSection = ({ currentContent }) => {
	const { id, adres, email, tel } = currentContent.footerSection;

	return (
		<Card>
			<CardImage image={footerImage} />
			<CardContentWrapper>
				<CardTitle>Tel</CardTitle>
				<CardInput type='text' id={id} name='tel' value={tel} />
				<CardDivider />
				<CardTitle>Email</CardTitle>
				<CardInput type='text' id={id} name='email' value={email} />
				<CardDivider />
				<CardTitle>Adres</CardTitle>
				<CardTextArea
					height={100}
					type='text'
					id={id}
					name='adres'
					value={adres}
				/>
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	);
};

export default compose(WithContent)(FooterSection);
