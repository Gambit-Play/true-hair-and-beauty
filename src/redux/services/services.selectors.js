import { createSelector } from 'reselect';

const selectServicesStore = state => state.services;

// Selects services.currentServices from the state
export const selectCurrenServices = createSelector(
	[selectServicesStore],
	services => services.currentServices
);

// Selects services.isFetching from the state
export const selectIsFetching = createSelector(
	[selectServicesStore],
	services => services.isFetching
);
