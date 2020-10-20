import { createSelector } from 'reselect';

const selectFooterDetailStore = state => state.footerDetail;

// Selects footerDetail from the state
export const selectFooterDetail = createSelector(
	[selectFooterDetailStore],
	footerDetail => footerDetail
);

// Selects footerDetail.isEdit from the state
export const selectIsEdit = createSelector(
	[selectFooterDetail],
	footerDetail => footerDetail.isEdit
);
