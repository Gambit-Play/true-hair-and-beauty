import { createSelector } from 'reselect';

const selectAboutUsDetailStore = state => state.aboutUsDetail;

// Selects aboutUsDetail from the state
export const selectAboutUsDetail = createSelector(
	[selectAboutUsDetailStore],
	aboutUsDetail => aboutUsDetail
);

// Selects aboutUsDetail.title from the state
export const selectTitle = createSelector(
	[selectAboutUsDetail],
	aboutUsDetail => aboutUsDetail.title
);

// Selects aboutUsDetail.body from the state
export const selectBody = createSelector(
	[selectAboutUsDetail],
	aboutUsDetail => aboutUsDetail.body
);

// Selects aboutUsDetail.isEdit from the state
export const selectIsEdit = createSelector(
	[selectAboutUsDetail],
	aboutUsDetail => aboutUsDetail.isEdit
);
