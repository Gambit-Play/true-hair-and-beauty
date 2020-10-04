import { createSelector } from 'reselect';

const selectServiceDetailStore = state => state.serviceDetail;

// Selects serviceDetail from the state
export const selectServiceDetail = createSelector(
	[selectServiceDetailStore],
	serviceDetail => serviceDetail
);
