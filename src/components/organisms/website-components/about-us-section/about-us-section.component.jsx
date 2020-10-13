import React from 'react';
import { compose } from 'redux';

// Content ids
import { ABOUT_US_SECTION } from '../../../../redux/content/content.ids';

// HOC
import WithContent from '../../../HOC/with-content.hoc';

// Components
import { AboutUs } from './about-us-section.styles';
import { PinkDivider } from '../../../atoms/divider/divider.styles';

const AboutUsSection = ({ currentContent }) => {
	const { title, body } = currentContent[ABOUT_US_SECTION];

	return (
		<AboutUs>
			<div className={'about-us-text-block'}>
				<div className={'about-us-title'}>{title}</div>
				<PinkDivider />
				<div className='about-us-body'>{body}</div>
			</div>
		</AboutUs>
	);
};

export default compose(WithContent)(AboutUsSection);
