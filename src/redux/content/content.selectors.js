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
	currentContent => (currentContent ? currentContent.headerSection : {})
);

// Selects currentContent.aboutUsSection from the state
export const selectAboutUsSection = createSelector(
	[selectCurrenContent],
	currentContent => (currentContent ? currentContent.aboutUsSection : {})
);

// Selects currentContent.timeSection from the state
export const selectTimeSection = createSelector(
	[selectCurrenContent],
	currentContent => (currentContent ? currentContent.timeSection : {})
);

// Selects currentContent.footerSection from the state
export const selectFooterSection = createSelector(
	[selectCurrenContent],
	currentContent => (currentContent ? currentContent.footerSection : {})
);
