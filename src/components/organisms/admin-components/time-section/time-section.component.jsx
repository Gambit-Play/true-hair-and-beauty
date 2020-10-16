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
import headerImage from '../../../../assets/time-screenshot.png';

const TimeSection = ({ currentContent }) => {
	const {
		id,
		maandag,
		dinsdag,
		woensdag,
		donderdag,
		vrijdag,
		zaterdag,
		zondag,
	} = currentContent.timeSection;

	return (
		<Card>
			<CardImage image={headerImage} />
			<CardContentWrapper>
				<CardTitle>Zondag</CardTitle>
				<CardInput
					type='text'
					id={zondag}
					name='zondag'
					value={zondag.time}
				/>
				<CardDivider />
				<CardTitle>Maandag</CardTitle>
				<CardInput
					type='text'
					id={maandag}
					name='maandag'
					value={maandag.time}
				/>
				<CardDivider />
				<CardTitle>Dinsdag</CardTitle>
				<CardInput
					type='text'
					id={dinsdag}
					name='dinsdag'
					value={dinsdag.time}
				/>
				<CardDivider />
				<CardTitle>Woensdag</CardTitle>
				<CardInput
					type='text'
					id={woensdag}
					name='woensdag'
					value={woensdag.time}
				/>
				<CardDivider />
				<CardTitle>Donderdag</CardTitle>
				<CardInput
					type='text'
					id={donderdag}
					name='dinsdag'
					value={dinsdag.time}
				/>
				<CardDivider />
				<CardTitle>Vrijdag</CardTitle>
				<CardInput
					type='text'
					id={vrijdag}
					name='vrijdag'
					value={vrijdag.time}
				/>
				<CardDivider />
				<CardTitle>Zaterdag</CardTitle>
				<CardInput
					type='text'
					id={zaterdag}
					name='zaterdag'
					value={zaterdag.time}
				/>
			</CardContentWrapper>
			<CardButtonBlock>
				<CardButton>Update</CardButton>
				<CardButton outline>Cancel</CardButton>
			</CardButtonBlock>
		</Card>
	);
};

export default compose(WithContent)(TimeSection);
