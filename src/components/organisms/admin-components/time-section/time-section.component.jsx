import React, { useEffect } from 'react';
import { compose } from 'redux';

//HOC
import WithContent from '../../../HOC/with-content.hoc';
import WithTimeDetail from '../../../HOC/with-time-detail.hoc';

// Component
import {
	ContentCard,
	ContentImage,
	ContentLayout,
	ContentTitle,
	FormActionBlock,
} from './time-section.styles';
import {
	InputBlock,
	InputLabel,
	TextInput,
} from '../../../atoms/inputs/inputs.styles';

// Images
import timeImage from '../../../../assets/time-screenshot.png';
import { Button } from '../../../atoms/button/button.styles';

const TimeSection = ({
	timeSection,
	timeDetail,
	clearTime,
	fetchTimeStart,
	updateTimeStart,
	setTimeStart,
}) => {
	const {
		maandag,
		dinsdag,
		woensdag,
		donderdag,
		vrijdag,
		zaterdag,
		zondag,
	} = timeSection;

	useEffect(() => {
		fetchTimeStart();
	}, [fetchTimeStart]);

	return (
		<ContentLayout>
			<ContentTitle>Time Section</ContentTitle>
			<ContentImage image={timeImage} />
			<ContentCard>
				<InputBlock gridArea='zondag' className='input-block'>
					<InputLabel>Zondag:</InputLabel>
					<TextInput
						type='text'
						id={zondag}
						name='zondag'
						value={timeDetail.zondag}
						onChange={event => {
							setTimeStart(event.target.name, event.target.value);
						}}
					/>
				</InputBlock>
				<InputBlock gridArea='maandag' className='input-block'>
					<InputLabel>Maandag:</InputLabel>
					<TextInput
						type='text'
						id={maandag}
						name='maandag'
						value={timeDetail.maandag}
						onChange={event => {
							setTimeStart(event.target.name, event.target.value);
						}}
					/>
				</InputBlock>
				<InputBlock gridArea='dinsdag' className='input-block'>
					<InputLabel>Dinsdag:</InputLabel>
					<TextInput
						type='text'
						id={dinsdag}
						name='dinsdag'
						value={timeDetail.dinsdag}
						onChange={event => {
							setTimeStart(event.target.name, event.target.value);
						}}
					/>
				</InputBlock>
				<InputBlock gridArea='woensdag' className='input-block'>
					<InputLabel>Woensdag:</InputLabel>
					<TextInput
						type='text'
						id={woensdag}
						name='woensdag'
						value={timeDetail.woensdag}
						onChange={event => {
							setTimeStart(event.target.name, event.target.value);
						}}
					/>
				</InputBlock>
				<InputBlock gridArea='donderdag' className='input-block'>
					<InputLabel>Donderdag:</InputLabel>
					<TextInput
						type='text'
						id={donderdag}
						name='donderdag'
						value={timeDetail.donderdag}
						onChange={event => {
							setTimeStart(event.target.name, event.target.value);
						}}
					/>
				</InputBlock>
				<InputBlock gridArea='vrijdag' className='input-block'>
					<InputLabel>Vrijdag:</InputLabel>
					<TextInput
						type='text'
						id={vrijdag}
						name='vrijdag'
						value={timeDetail.vrijdag}
						onChange={event => {
							setTimeStart(event.target.name, event.target.value);
						}}
					/>
				</InputBlock>
				<InputBlock gridArea='zaterdag' className='input-block'>
					<InputLabel>Zaterdag:</InputLabel>
					<TextInput
						type='text'
						id={zaterdag}
						name='zaterdag'
						value={timeDetail.zaterdag}
						onChange={event => {
							setTimeStart(event.target.name, event.target.value);
						}}
					/>
				</InputBlock>
				<FormActionBlock>
					<Button className='save-button' onClick={updateTimeStart}>
						Update
					</Button>
					<Button
						outlined
						onClick={() => {
							clearTime();
							fetchTimeStart();
						}}
					>
						Cancel
					</Button>
				</FormActionBlock>
			</ContentCard>
		</ContentLayout>
	);
};

export default compose(WithTimeDetail, WithContent)(TimeSection);
