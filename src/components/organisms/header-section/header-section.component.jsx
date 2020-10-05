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
				<motion.h1
					className='header-text-top'
					initial={{ y: '5vh', opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
				>
					Haar Specialst
				</motion.h1>
				<motion.div
					className='header-divider'
					initial={{ width: 0 }}
					animate={{ width: 200 }}
					transition={{ delay: 1, duration: 0.7 }}
				></motion.div>
				<motion.h2
					className='header-text-bottom'
					initial={{ y: '-5vh', opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.7 }}
				>
					Voor alle haar type
				</motion.h2>
				<motion.div
					initial={{ y: '5vh', opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1, duration: 0.7 }}
				>
					<ButtonContained className='button'>
						Afspraak Maken
					</ButtonContained>
				</motion.div>
			</div>
		</Header>
	);
};

export default HeaderSection;
