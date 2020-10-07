import { createSelector } from 'reselect';

const selectContentStore = state => state.content;

// Selects content.currentContent from the state
export const selectCurrenContent = createSelector(
	[selectContentStore],
	content => content.currentContent
);

// Selects content.isFetching from the state
export const selectIsFetching = createSelector(
	[selectContentStore],
	content => content.isFetching
);
