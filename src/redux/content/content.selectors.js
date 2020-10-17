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

// Selects currentContent.headerSection from the state
export const selectHeaderSection = createSelector(
	[selectCurrenContent],
	currentContent => currentContent.headerSection
);
