import React from 'react';

// Components
import { LoaderContainer } from './loader.styles';
import Cube from './cube/cube.component';

// Images
import logo from '../../../assets/small-logo-light.svg';

const Loader = () => {
	return (
		<LoaderContainer>
			<img src={logo} loading='lazy' alt='' />
			<Cube />
		</LoaderContainer>
	);
};

export default Loader;
