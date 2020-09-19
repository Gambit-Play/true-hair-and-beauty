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
				<div className='header-text-top'>Haar Specialst</div>
				<div className='header-divider'></div>
				<div className='header-text-bottom'>Voor alle haar type</div>
				<ButtonContained className='button'>
					Afspraak Maken
				</ButtonContained>
			</div>
		</Header>
	);
};

export default HeaderSection;
