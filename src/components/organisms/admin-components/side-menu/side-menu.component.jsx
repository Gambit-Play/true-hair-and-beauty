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
import section4ColorIcon from '../../../../assets/section-4-color-icon.svg';
import section4LightIcon from '../../../../assets/section-4-light-icon.svg';

const SideMenu = () => {
	const { push } = useHistory();
	const { path } = useRouteMatch();
	const { pathname } = useLocation();

	return (
		<MainWrapper>
			<div className='links-wrapper'>
				<MenuLink
					linkText='Content'
					activeImage={section4LightIcon}
					inactiveImage={section4ColorIcon}
					handleClick={() => push(`${path}/${ROUTES.CONTENT}`)}
					isActive={isCurrent(ROUTES.CONTENT, pathname)}
				/>
				<MenuLink
					linkText='Services'
					activeImage={section4LightIcon}
					inactiveImage={section4ColorIcon}
					handleClick={() =>
						push(`${path}/${ROUTES.SERVICES_SECTION}`)
					}
					isActive={isCurrent(ROUTES.SERVICES_SECTION, pathname)}
				/>
			</div>
		</MainWrapper>
	);
};

export default SideMenu;
