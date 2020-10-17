import { createSelector } from 'reselect';

const selectHeaderDetailStore = state => state.aboutUsDetail;

// Selects aboutUsDetail from the state
export const selectHeaderDetail = createSelector(
	[selectHeaderDetailStore],
	aboutUsDetail => aboutUsDetail
);

// Selects aboutUsDetail.title from the state
export const selectTitle = createSelector(
	[selectHeaderDetail],
	aboutUsDetail => aboutUsDetail.title
);

// Selects aboutUsDetail.body from the state
export const selectBody = createSelector(
	[selectHeaderDetail],
	aboutUsDetail => aboutUsDetail.body
);

// Selects aboutUsDetail.isEdit from the state
export const selectIsEdit = createSelector(
	[selectHeaderDetail],
	aboutUsDetail => aboutUsDetail.isEdit
);
