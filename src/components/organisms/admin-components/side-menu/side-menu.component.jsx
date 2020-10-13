import React from 'react';
import { useHistory } from 'react-router-dom';

// Component
import { MainWrapper } from './side-menu.styles';
import MenuLink from './menu-links/menu-links.component';

// Images
import section1ColorIcon from '../../../../assets/section-1-color-icon.svg';
import section1LightIcon from '../../../../assets/section-1-light-icon.svg';
import section2ColorIcon from '../../../../assets/section-2-color-icon.svg';
import section2LightIcon from '../../../../assets/section-2-light-icon.svg';
import section3ColorIcon from '../../../../assets/section-3-color-icon.svg';
import section3LightIcon from '../../../../assets/section-3-light-icon.svg';
import section4ColorIcon from '../../../../assets/section-4-color-icon.svg';
import section4LightIcon from '../../../../assets/section-4-light-icon.svg';
import section5ColorIcon from '../../../../assets/section-5-color-icon.svg';
import section5LightIcon from '../../../../assets/section-5-light-icon.svg';

const SideMenu = () => {
	const history = useHistory();
	return (
		<MainWrapper>
			<div className='links-wrapper'>
				<MenuLink
					linkText='Header Section'
					activeImage={section1LightIcon}
					inactiveImage={section1ColorIcon}
					handleClick={() => history.push('/admin/header-section')}
				/>
				<MenuLink
					linkText='About Us Section'
					activeImage={section2LightIcon}
					inactiveImage={section2ColorIcon}
				/>
				<MenuLink
					linkText='Time Section'
					activeImage={section3LightIcon}
					inactiveImage={section3ColorIcon}
				/>
				<MenuLink
					linkText='Services Section'
					activeImage={section4LightIcon}
					inactiveImage={section4ColorIcon}
				/>
				<MenuLink
					linkText='Footer Section'
					activeImage={section5LightIcon}
					inactiveImage={section5ColorIcon}
				/>
			</div>
		</MainWrapper>
	);
};

export default SideMenu;
