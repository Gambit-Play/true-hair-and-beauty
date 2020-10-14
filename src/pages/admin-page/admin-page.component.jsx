import React from 'react';

// Component
import SideMenu from '../../components/organisms/admin-components/side-menu/side-menu.component';
import { MainWrapper, AdminView } from './admin-page.styles';
import AdminRoutes from '../../components/organisms/admin-components/admin-routes/admin-routes.component';

const AdminPage = () => {
	return (
		<MainWrapper>
			<SideMenu />
			<AdminView>
				<AdminRoutes />
			</AdminView>
		</MainWrapper>
	);
};

export default AdminPage;
