import React from 'react';
import { motion } from 'framer-motion';

// Components
import { Header } from './header-section.styles';
import { ButtonContained } from '../../atoms/button/button.styles';

// Images
import logoText from '../../../assets/logo-plus-text.svg';

const HeaderSection = () => {
	return (
		<Header>
			<div className='header-logo-wrapper'>
				<img
					src={logoText}
					alt=''
					className='header-logo'
					loading='lazy'
				/>
			</div>
			<div className='header-text-wrapper'>
				<motion.h1 className='header-text-top' animate={{}}>
					Haar Specialst
				</motion.h1>
				<div className='header-divider'></div>
				<h2 className='header-text-bottom'>Voor alle haar type</h2>
				<ButtonContained className='button'>
					Afspraak Maken
				</ButtonContained>
			</div>
		</Header>
	);
};

export default HeaderSection;
