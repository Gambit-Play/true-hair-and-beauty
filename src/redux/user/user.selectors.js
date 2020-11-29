import { createSelector } from 'reselect';

const selectUserStore = state => state.user;

// Selects user.currentUser from the state
export const selectCurrentUser = createSelector(
	[selectUserStore],
	user => user.currentUser
);
