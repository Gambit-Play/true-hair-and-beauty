import { createSelector } from 'reselect';

const selectTimeDetailStore = state => state.timeDetail;

// Selects timeDetail from the state
export const selectTimeDetail = createSelector(
	[selectTimeDetailStore],
	timeDetail => timeDetail
);

// Selects timeDetail.isEdit from the state
export const selectIsEdit = createSelector(
	[selectTimeDetail],
	timeDetail => timeDetail.isEdit
);
