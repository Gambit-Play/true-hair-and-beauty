import React, { useState } from 'react';

// Component
import { MainWrapper } from './side-menu.styles';

const SideMenu = () => {
	const [isHover, setIsHover] = useState(false);
	return (
		<MainWrapper>
			<div
				className='link-block'
				onMouseOver={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<div
					className={isHover ? 'menu-link on-hover' : 'menu-link'}
				></div>
				<div
					className={
						isHover ? 'menu-link-text on-hover' : 'menu-link-text'
					}
				>
					Header Section
				</div>
			</div>
		</MainWrapper>
	);
};

export default SideMenu;
