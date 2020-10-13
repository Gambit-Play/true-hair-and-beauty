import React from 'react';
import { compose } from 'redux';

// Content ids
import { TIME_SECTION } from '../../../../redux/content/content.ids';

// HOC
import WithContent from '../../../HOC/with-content.hoc';

// Components
import { OpeningTime } from './opening-time-section.styles';
import { PinkDivider } from '../../../atoms/divider/divider.styles';

const OpeningTimeSection = ({ currentContent }) => {
	const {
		maandag,
		dinsdag,
		woensdag,
		donderdag,
		vrijdag,
		zaterdag,
		zondag,
	} = currentContent[TIME_SECTION];

	return (
		<OpeningTime>
			<div className='opening-title'>Openingstijden</div>
			<PinkDivider />
			<div className='time-card-wrapper'>
				<div className='day-card-pink'>
					<div className='box-day-white'>{zondag.short}</div>
					<div className='box-text-white'>{zondag.time}</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>{maandag.short}</div>
					<div className='box-text-dark'>{maandag.time}</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>{dinsdag.short}</div>
					<div className='box-text-dark'>{dinsdag.time}</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>{woensdag.short}</div>
					<div className='box-text-dark'>{woensdag.time}</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>{donderdag.short}</div>
					<div className='box-text-dark'>{donderdag.time}</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>{vrijdag.short}</div>
					<div className='box-text-dark'>{vrijdag.time}</div>
				</div>
				<div className='day-card-pink'>
					<div className='box-day-white'>{zaterdag.short}</div>
					<div className='box-text-white'>{zaterdag.time}</div>
				</div>
			</div>
		</OpeningTime>
	);
};

export default compose(WithContent)(OpeningTimeSection);
