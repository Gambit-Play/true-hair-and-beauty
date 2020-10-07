import React from 'react';
import { motion } from 'framer-motion';

// Components
import { Header } from './header-section.styles';
import { ButtonContained } from '../../atoms/button/button.styles';

// Images
import logoText from '../../../assets/logo-plus-text.svg';

// Animation
import {
	headerTopText,
	headerBottomText,
	divider,
	button,
} from './header-section.animation';

const HeaderSection = () => {
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
					Haar Specialst
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
					Voor alle haar type
				</motion.h2>
				<motion.div variants={button} initial='start' animate='end'>
					<ButtonContained className='button'>
						Afspraak Maken
					</ButtonContained>
				</motion.div>
			</div>
		</Header>
	);
};

export default HeaderSection;
