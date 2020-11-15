import React, { useEffect } from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';
import WithFooterDetail from '../../../HOC/with-footer-detail.hoc';

// Component
import {
	ContentImage,
	ContentTitle,
	ContentLayout,
	ContentCard,
	FormActionBlock,
} from './footer-section.styles';
import {
	InputBlock,
	InputLabel,
	TextInput,
} from '../../../atoms/inputs/inputs.styles';
import { Button } from '../../../atoms/button/button.styles';

// Images
import footerImage from '../../../../assets/footer-screenshot.png';

const FooterSection = ({
	footerDetail,
	fetchFooterStart,
	updateFooterStart,
	setFooterStart,
	clearFooter,
}) => {
	useEffect(() => {
		fetchFooterStart();
	}, [fetchFooterStart]);

	return (
		<ContentLayout>
			<ContentTitle>Footer Section</ContentTitle>
			<ContentImage image={footerImage} />
			<ContentCard>
				<div>
					<InputBlock className='input-block'>
						<InputLabel>Tel:</InputLabel>
						<TextInput
							type='text'
							id={footerDetail.id}
							name='tel'
							value={footerDetail.tel}
							onChange={event => {
								setFooterStart(
									event.target.name,
									event.target.value
								);
							}}
						/>
					</InputBlock>
					<InputBlock className='input-block'>
						<InputLabel>Email:</InputLabel>
						<TextInput
							type='text'
							id={footerDetail.id}
							name='email'
							value={footerDetail.email}
							onChange={event => {
								setFooterStart(
									event.target.name,
									event.target.value
								);
							}}
						/>
					</InputBlock>
					<InputBlock className='input-block'>
						<InputLabel>Adres:</InputLabel>
						<TextInput
							type='text'
							id={footerDetail.id}
							name='adres'
							value={footerDetail.adres}
							onChange={event => {
								setFooterStart(
									event.target.name,
									event.target.value
								);
							}}
						/>
					</InputBlock>
				</div>
				<FormActionBlock>
					<Button className='save-button' onClick={updateFooterStart}>
						Update
					</Button>
					<Button
						outlined
						onClick={() => {
							clearFooter();
							fetchFooterStart();
						}}
					>
						Cancel
					</Button>
				</FormActionBlock>
			</ContentCard>
		</ContentLayout>
	);
};

export default compose(WithFooterDetail, WithContent)(FooterSection);
