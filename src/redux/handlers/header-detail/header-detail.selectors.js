import { createSelector } from 'reselect';

const selectHeaderDetailStore = state => state.headerDetail;

// Selects headerDetail from the state
export const selectHeaderDetail = createSelector(
	[selectHeaderDetailStore],
	headerDetail => headerDetail
);

// Selects headerDetail.isEdit from the state
export const selectIsEdit = createSelector(
	[selectHeaderDetail],
	headerDetail => headerDetail.isEdit
);
