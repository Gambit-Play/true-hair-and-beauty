import React from 'react';
import { connect } from 'react-redux';

// Redux
import { createServicesStart } from '../../../redux/handlers/services-detail/services-detail.actions';

// Components
import { Header } from './header-section.styles';
import { ButtonContained } from '../../atoms/button/button.styles';

// Images
import logoText from '../../../assets/logo-plus-text.svg';

const HeaderSection = ({ createServicesStart }) => {
	const handleClick = () => {
		createServicesStart();
		console.log('WWWWWWWWWW');
	};
	return (
		<Header>
			<div className='header-logo-wrapper'>
				<img src={logoText} alt='' className='header-logo' />
			</div>
			<div className='header-text-wrapper'>
				<h1 className='header-text-top'>Haar Specialst</h1>
				<div className='header-divider'></div>
				<h2 className='header-text-bottom'>Voor alle haar type</h2>
				<ButtonContained className='button' onClick={handleClick}>
					Afspraak Maken
				</ButtonContained>
			</div>
		</Header>
	);
};

const mapDispatchToProps = dispatch => ({
	createServicesStart: () => dispatch(createServicesStart()),
});

export default connect(null, mapDispatchToProps)(HeaderSection);
