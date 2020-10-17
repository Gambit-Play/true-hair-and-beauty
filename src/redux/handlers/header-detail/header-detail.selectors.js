import { createSelector } from 'reselect';

const selectHeaderDetailStore = state => state.headerDetail;

// Selects headerDetail from the state
export const selectHeaderDetail = createSelector(
	[selectHeaderDetailStore],
	headerDetail => headerDetail
);

// Selects headerDetail.bottomText from the state
export const selectBottomText = createSelector(
	[selectHeaderDetail],
	headerDetail => headerDetail.bottomText
);

// Selects headerDetail.topText from the state
export const selectTopText = createSelector(
	[selectHeaderDetail],
	headerDetail => headerDetail.topText
);

// Selects headerDetail.isEdit from the state
export const selectIsEdit = createSelector(
	[selectHeaderDetail],
	headerDetail => headerDetail.isEdit
);
