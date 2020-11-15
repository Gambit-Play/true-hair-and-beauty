import React, { useEffect } from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';
import WithHeaderDetail from '../../../HOC/with-header-detail.hoc';

// Component
import {
	ContentLayout,
	ContentCard,
	ContentImage,
	ContentTitle,
} from './header-section.styles';
import {
	InputBlock,
	InputLabel,
	TextInput,
} from '../../../atoms/inputs/inputs.styles';

// Images
import headerImage from '../../../../assets/header-screenshot.png';
import { FormActionBlock } from '../service-detail/service-detail.styles';
import { Button } from '../../../atoms/button/button.styles';

const HeaderSection = ({
	headerSection,
	headerDetail,
	fetchHeaderStart,
	updateHeaderStart,
	setHeaderStart,
	clearHeader,
}) => {
	useEffect(() => {
		fetchHeaderStart();
	}, [fetchHeaderStart]);

	return (
		<ContentLayout>
			<ContentTitle>Header Section</ContentTitle>
			<ContentImage image={headerImage} />
			<ContentCard>
				<div>
					<InputBlock className='input-block'>
						<InputLabel>Top Text:</InputLabel>
						<TextInput
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
					</InputBlock>
					<InputBlock className='input-block'>
						<InputLabel>Bottom Text:</InputLabel>
						<TextInput
							value={headerDetail.bottomText}
							type='text'
							name='bottomText'
							onChange={event => {
								setHeaderStart(
									event.target.name,
									event.target.value
								);
							}}
						/>
					</InputBlock>
				</div>
				<FormActionBlock>
					<Button className='save-button' onClick={updateHeaderStart}>
						Update
					</Button>
					<Button
						outlined
						onClick={() => {
							clearHeader();
							fetchHeaderStart();
						}}
					>
						Cancel
					</Button>
				</FormActionBlock>
			</ContentCard>
		</ContentLayout>
	);
};

export default compose(WithHeaderDetail, WithContent)(HeaderSection);
