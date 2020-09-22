import React from 'react';

// Components
import { Header } from './header-section.style';
import { ButtonContained } from '../../atoms/button/button.styles';

// Images
import logoText from '../../../assets/logo-plus-text.svg';

const HeaderSection = () => {
	return (
		<Header>
			<div className='header-logo-wrapper'>
				<img src={logoText} alt='' className='header-logo' />
			</div>
			<div className='header-text-wrapper'>
				<h1 className='header-text-top'>Haar Specialst</h1>
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
