import React from 'react';
import { motion } from 'framer-motion';
import { compose } from 'redux';

// Content ids
import { HEADER_SECTION } from '../../../../redux/content/content.ids';

// HOC
import WithContent from '../../../HOC/with-content.hoc';

// Components
import { Header } from './header-section.styles';
import { ButtonContained } from '../../../atoms/button/button.styles';

// Images
import logoText from '../../../../assets/logo-plus-text.svg';

// Animation
import {
	headerTopText,
	headerBottomText,
	divider,
	button,
} from './header-section.animation';

const HeaderSection = ({ currentContent }) => {
	const { bottomText, topText } = currentContent[HEADER_SECTION];

	return (
		<Header>
			<div className='header-logo-wrapper'>
				<img src={logoText} alt='' className='header-logo' />
			</div>
			<div className='header-text-wrapper'>
				<motion.h1
					className='header-text-top'
					variants={headerTopText}
					initial='start'
					animate='end'
				>
					{topText}
				</motion.h1>
				<motion.div
					className='header-divider'
					variants={divider}
					initial='start'
					animate='end'
				></motion.div>
				<motion.h2
					className='header-text-bottom'
					variants={headerBottomText}
					initial='start'
					animate='end'
				>
					{bottomText}
				</motion.h2>
				<motion.div
					variants={button}
					initial='start'
					animate='end'
					className='button'
				>
					<ButtonContained
						href='http://my.setmore.com/bookingpage/16c8ffb3-3ea8-4d41-8353-237ab9d3d6ca'
						target='_blank'
					>
						Afspraak Maken
					</ButtonContained>
				</motion.div>
			</div>
		</Header>
	);
};

export default compose(WithContent)(HeaderSection);
