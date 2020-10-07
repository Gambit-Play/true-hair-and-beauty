import React from 'react';
import { compose } from 'redux';

// Content ids
import { ABOUT_US_SECTION } from '../../../redux/content/content.ids';

// HOC
import WithContent from '../../HOC/with-content.hoc';

// Components
import { AboutUs } from './about-us-section.styles';

const AboutUsSection = ({ currentContent }) => {
	const { title, body } = currentContent[ABOUT_US_SECTION];
	console.log(
		'@@@@@ AboutUsSection - currentContent[ABOUT_US_SECTION]:',
		currentContent[ABOUT_US_SECTION]
	);

	return (
		<AboutUs>
			<div className={'about-us-text-block'}>
				<div className={'about-us-title'}>{title}</div>
				<div className='about-us-body'>{body}</div>
			</div>
		</AboutUs>
	);
};

export default compose(WithContent)(AboutUsSection);
