import React, { useState } from 'react';

// Component
import { LinkBlock } from './menu-links.styles';

const MenuLinks = ({ linkText, inactiveImage, activeImage }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<LinkBlock
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			inactiveImage={inactiveImage}
			activeImage={activeImage}
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
