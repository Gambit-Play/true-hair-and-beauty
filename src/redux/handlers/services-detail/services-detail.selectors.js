import { createSelector } from 'reselect';

const selectServicesDetailStore = state => state.servicesDetail;

// Selects servicesDetail from the state
export const selectServicesDetail = createSelector(
	[selectServicesDetailStore],
	servicesDetail => servicesDetail
);
