import React from 'react';

// Component
import { MainWrapper } from './side-menu.styles';
import MenuLink from './menu-links/menu-links.component';

const SideMenu = () => {
	return (
		<MainWrapper>
			<div className='links-wrapper'>
				<MenuLink linkText='Header Section' />
				<MenuLink linkText='About Us Section' />
				<MenuLink linkText='Time Section' />
				<MenuLink linkText='Services Section' />
				<MenuLink linkText='Footer Section' />
			</div>
		</MainWrapper>
	);
};

export default SideMenu;
