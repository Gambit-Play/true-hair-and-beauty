import React from 'react';
import { compose } from 'redux';

// Content ids
import { FOOTER_SECTION } from '../../../../redux/content/content.ids';

// HOC
import WithContent from '../../../HOC/with-content.hoc';

// Component
import { Footer } from './footer-section.styles';
import { ButtonOutlinedLight } from '../../../atoms/button/button.styles';

// Images
import logoImage from '../../../../assets/small-logo-light.svg';

const FooterSection = ({ currentContent }) => {
	const { adres, email, tel } = currentContent[FOOTER_SECTION];

	return (
		<Footer>
			<div className='footer-img-wrapper'>
				<img src={logoImage} loading='lazy' alt='' />
			</div>
			<div className='footer-contact-wrapper'>
				<div className='footer-left-section'>
					<div className='footer-title'>Contact:</div>
					<div className='footer-pink-divider'></div>
					<div className='footer-body'>{`Tel: ${tel}`}</div>
					<div className='footer-body'>{`Adres: ${adres}`}</div>
					<div className='footer-body'>{`Email: ${email}`}</div>
				</div>
				<div className='footer-divider'></div>
				<div className='footer-right-section'>
					<ButtonOutlinedLight>afspraak maken</ButtonOutlinedLight>
				</div>
			</div>
		</Footer>
	);
};

export default compose(WithContent)(FooterSection);
