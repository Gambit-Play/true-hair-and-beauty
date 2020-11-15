import React, { useEffect } from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';
import WithAboutUsDetail from '../../../HOC/with-about-us-detail.hoc';

// Component
import {
	CardTextArea,
	ContentLayout,
	ContentCard,
	ContentImage,
	ContentTitle,
	FormActionBlock,
	TextInput,
} from './about-us-section.styles';
import { InputBlock, InputLabel } from '../../../atoms/inputs/inputs.styles';
import { Button } from '../../../atoms/button/button.styles';

// Images
import aboutUsImage from '../../../../assets/about-us-screenshot.png';

const AboutUsSection = ({
	aboutUsSection,
	aboutUsDetail,
	fetchAboutUsStart,
	updateAboutUsStart,
	setAboutUsStart,
	clearAboutUs,
	isEdit,
}) => {
	useEffect(() => {
		fetchAboutUsStart();
	}, [fetchAboutUsStart]);

	return (
		<ContentLayout>
			<ContentTitle>About Us Section</ContentTitle>
			<ContentImage image={aboutUsImage} />
			<ContentCard>
				<div>
					<InputBlock className='input-block'>
						<InputLabel>Title:</InputLabel>
						<TextInput
							value={aboutUsDetail.title}
							type='text'
							name='title'
							onChange={event => {
								setAboutUsStart(
									event.target.name,
									event.target.value
								);
							}}
						/>
					</InputBlock>
					<InputBlock className='input-block'>
						<InputLabel>Body:</InputLabel>
						<CardTextArea
							value={aboutUsDetail.body}
							type='text'
							name='body'
							onChange={event => {
								setAboutUsStart(
									event.target.name,
									event.target.value
								);
							}}
						/>
					</InputBlock>
				</div>
				<FormActionBlock>
					<Button
						className='save-button'
						onClick={updateAboutUsStart}
					>
						Update
					</Button>
					<Button
						outlined
						onClick={() => {
							clearAboutUs();
							fetchAboutUsStart();
						}}
					>
						Cancel
					</Button>
				</FormActionBlock>
			</ContentCard>
		</ContentLayout>
	);
};

export default compose(WithAboutUsDetail, WithContent)(AboutUsSection);
