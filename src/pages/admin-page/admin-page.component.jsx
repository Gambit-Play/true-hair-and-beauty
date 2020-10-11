import React from 'react';

// Component
import SideMenu from '../../components/organisms/side-menu/side-menu.component';
import { MainWrapper } from './admin-page.styles';

const AdminPage = () => {
	return (
		<MainWrapper>
			<SideMenu />
		</MainWrapper>
	);
};

export default AdminPage;
