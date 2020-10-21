import { createSelector } from 'reselect';

const selectServiceDetailStore = state => state.serviceDetail;

// Selects serviceDetail from the state
export const selectServiceDetail = createSelector(
	[selectServiceDetailStore],
	serviceDetail => serviceDetail
);

// Selects serviceDetail.services from the state
export const selectServices = createSelector(
	[selectServiceDetailStore],
	serviceDetail => serviceDetail.services
);

// Selects serviceDetail.isEdit from the state
export const selectIsEdit = createSelector(
	[selectServiceDetailStore],
	serviceDetail => serviceDetail.isEdit
);
