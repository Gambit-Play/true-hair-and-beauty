import React, { useState } from 'react';

// Component
import { LinkBlock } from './menu-links.styles';

const MenuLinks = ({
	linkText,
	inactiveImage,
	activeImage,
	handleClick,
	isActive,
}) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<LinkBlock
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			inactiveImage={inactiveImage}
			activeImage={activeImage}
			onClick={handleClick}
			isActive={isActive}
		>
			<div
				className={
					isHover || isActive
						? 'menu-link-text on-hover'
						: 'menu-link-text'
				}
			>
				{linkText}
			</div>
		</LinkBlock>
	);
};

export default MenuLinks;
