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
				<div class='day-card-white'>
					<div class='box-day-dark'>ma</div>
					<div class='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div class='day-card-white'>
					<div class='box-day-dark'>din</div>
					<div class='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div class='day-card-white'>
					<div class='box-day-dark'>woe</div>
					<div class='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div class='day-card-white'>
					<div class='box-day-dark'>don</div>
					<div class='box-text-dark'>11:00 - 18:00</div>
				</div>
				<div class='day-card-white'>
					<div class='box-day-dark'>vrij</div>
					<div class='box-text-dark'>11:00 - 18:00</div>
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
