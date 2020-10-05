import React from 'react';

// Components
import { LoaderContainer } from './loader.styles';

// Images
import logo from '../../../assets/small-logo-light.svg';

const Loader = () => {
	return (
		<LoaderContainer>
			<img src={logo} loading='lazy' alt='' />
			<div className='loader-text'>Loading</div>
		</LoaderContainer>
	);
};

export default Loader;
