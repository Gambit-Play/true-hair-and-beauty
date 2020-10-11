import React, { useState } from 'react';

// Component
import { LinkBlock } from './menu-links.styles';

const MenuLinks = ({ linkText }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<LinkBlock
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div className={isHover ? 'menu-link on-hover' : 'menu-link'}></div>
			<div
				className={
					isHover ? 'menu-link-text on-hover' : 'menu-link-text'
				}
			>
				{linkText}
			</div>
		</LinkBlock>
	);
};

export default MenuLinks;
