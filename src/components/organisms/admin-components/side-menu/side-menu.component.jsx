import React from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';

// Utils
import { isCurrent } from '../../../../utils/utils';

// Routes
import * as ROUTES from '../../../../routes/routes';

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
	const { push } = useHistory();
	const { path } = useRouteMatch();
	const { pathname } = useLocation();

	return (
		<MainWrapper>
			<div className='links-wrapper'>
				<MenuLink
					linkText='Header Section'
					activeImage={section1LightIcon}
					inactiveImage={section1ColorIcon}
					handleClick={() => push(`${path}/${ROUTES.HEADER_SECTION}`)}
					isActive={isCurrent(ROUTES.HEADER_SECTION, pathname)}
				/>
				<MenuLink
					linkText='About Us Section'
					activeImage={section2LightIcon}
					inactiveImage={section2ColorIcon}
					handleClick={() =>
						push(`${path}/${ROUTES.ABOUT_US_SECTION}`)
					}
					isActive={isCurrent(ROUTES.ABOUT_US_SECTION, pathname)}
				/>
				<MenuLink
					linkText='Time Section'
					activeImage={section3LightIcon}
					inactiveImage={section3ColorIcon}
					handleClick={() => push(`${path}/${ROUTES.TIME_SECTION}`)}
					isActive={isCurrent(ROUTES.TIME_SECTION, pathname)}
				/>
				<MenuLink
					linkText='Services Section'
					activeImage={section4LightIcon}
					inactiveImage={section4ColorIcon}
					handleClick={() =>
						push(`${path}/${ROUTES.SERVICES_SECTION}`)
					}
					isActive={isCurrent(ROUTES.SERVICES_SECTION, pathname)}
				/>
				<MenuLink
					linkText='Footer Section'
					activeImage={section5LightIcon}
					inactiveImage={section5ColorIcon}
					handleClick={() => push(`${path}/${ROUTES.FOOTER_SECTION}`)}
					isActive={isCurrent(ROUTES.FOOTER_SECTION, pathname)}
				/>
			</div>
		</MainWrapper>
	);
};

export default SideMenu;
