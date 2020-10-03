import { createSelector } from 'reselect';

const selectUiStore = state => state.ui;

// Selects ui.isModalOpen from the state
export const selectIsModalOpen = createSelector(
	[selectUiStore],
	ui => ui.isModalOpen
);
