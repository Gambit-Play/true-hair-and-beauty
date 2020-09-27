import React from 'react';

// Components
import { OpeningTime } from './opening-time-section.styles';
import { PinkDivider } from '../../atoms/divider/divider.styles';

const OpeningTimeSection = () => {
	return (
		<OpeningTime>
			<div className='opening-title'>Openingstijden</div>
			<PinkDivider />
			<div className='time-card-wrapper'>
				<div className='day-card-pink'>
					<div className='box-day-white'>Zon</div>
					<div className='box-text-white'>gesloten</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>ma</div>
					<div className='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>din</div>
					<div className='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>woe</div>
					<div className='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>don</div>
					<div className='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div className='day-card-white'>
					<div className='box-day-dark'>vrij</div>
					<div className='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div className='day-card-pink'>
					<div className='box-day-white'>Zat</div>
					<div className='box-text-white'>11:00 - 18:00</div>
				</div>
			</div>
		</OpeningTime>
	);
};

export default OpeningTimeSection;
