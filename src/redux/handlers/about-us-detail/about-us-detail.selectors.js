import { createSelector } from 'reselect';

const selectAboutUsDetailStore = state => state.aboutUsDetail;

// Selects aboutUsDetail from the state
export const selectAboutUsDetail = createSelector(
	[selectAboutUsDetailStore],
	aboutUsDetail => aboutUsDetail
);

// Selects aboutUsDetail.isEdit from the state
export const selectIsEdit = createSelector(
	[selectAboutUsDetail],
	aboutUsDetail => aboutUsDetail.isEdit
);
