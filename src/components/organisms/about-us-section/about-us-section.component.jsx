import React from 'react';

// Components
import { AboutUs } from './about-us-section.styles';

const AboutUsSection = () => {
	return (
		<AboutUs>
			<div className={'about-us-text-block'}>
				<div className={'about-us-title'}>
					Wie zijn wij<span className='pink-char'>?</span>
				</div>
				<div className='about-us-body'>
					Sinds 2012 zitten wij met onze salon in het gezellige
					centrum van Nijmegen.
					<br />
					We staan bekend om onze vriendeijke en huiselijke sfeer in
					de salon.
					<br />
					Wij zijn gespecialiseerd in alle haartypes.
				</div>
			</div>
		</AboutUs>
	);
};

export default AboutUsSection;
