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
					<Button outlined onClick={clearHeader}>
						Cancel
					</Button>
				</FormActionBlock>
			</ContentCard>
		</ContentLayout>
	);
};

export default compose(WithHeaderDetail, WithContent)(HeaderSection);

// <Card>
// 	<CardImage image={headerImage} />
// 	<CardContentWrapper>
// 		<CardTitle>Top Title</CardTitle>
// 		{isEdit ? (
// 			<CardInput
// 				value={headerDetail.topText}
// 				type='text'
// 				id={headerDetail.id}
// 				name='topText'
// 				onChange={event => {
// 					setHeaderStart(
// 						event.target.name,
// 						event.target.value
// 					);
// 				}}
// 			/>
// 		) : (
// 			<CardBody>{topText}</CardBody>
// 		)}
// 		<CardDivider />
// 		<CardTitle>Bottom Title</CardTitle>
// 		{isEdit ? (
// 			<CardInput
// 				value={headerDetail.bottomText}
// 				type='text'
// 				id={headerDetail.id}
// 				name='bottomText'
// 				onChange={event => {
// 					setHeaderStart(
// 						event.target.name,
// 						event.target.value
// 					);
// 				}}
// 			/>
// 		) : (
// 			<CardBody>{bottomText}</CardBody>
// 		)}
// 	</CardContentWrapper>
// 	<CardButtonBlock>
// 		{isEdit ? (
// 			<Fragment>
// 				<CardButton onClick={updateHeaderStart}>Update</CardButton>
// 				<CardButton outline onClick={clearHeader}>
// 					Cancel
// 				</CardButton>
// 			</Fragment>
// 		) : (
// 			<CardButton onClick={fetchHeaderStart}>Edit</CardButton>
// 		)}
// 	</CardButtonBlock>
// </Card>
