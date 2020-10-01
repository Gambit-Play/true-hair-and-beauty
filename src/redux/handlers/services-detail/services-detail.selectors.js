import { createSelector } from 'reselect';

const selectServicesDetailStore = state => state.servicesDetail;

// Selects servicesDetail.currentServices from the state
export const selectCurrenServices = createSelector(
	[selectServicesDetailStore],
	servicesDetail => servicesDetail.currentServices
);
