import React from 'react';

// Component
import { Footer } from './footer-section.styles';
import { ButtonOutlinedLight } from '../../atoms/button/button.styles';

// Images
import logoImage from '../../../assets/small-logo-light.svg';

const FooterSection = () => {
	return (
		<Footer>
			<div className='footer-img-wrapper'>
				<img src={logoImage} loading='lazy' alt='' />
			</div>
			<div className='footer-contact-wrapper'>
				<div className='footer-left-section'>
					<div className='footer-title'>Contact:</div>
					<div className='footer-pink-divider'></div>
					<div className='footer-body'>Tel: (024)785-2122</div>
					<div className='footer-body'>
						Adres: In de Betouwstraat 9, Nijmegen
					</div>
					<div className='footer-body'>
						Email: truehairbeauty@info.nl
					</div>
				</div>
				<div className='footer-divider'></div>
				<div className='footer-right-section'>
					<ButtonOutlinedLight>afspraak maken</ButtonOutlinedLight>
				</div>
			</div>
		</Footer>
	);
};

export default FooterSection;
