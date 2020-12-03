import { createSelector } from 'reselect';

const selectUserStore = state => state.user;

// Selects user.currentUser from the state
export const selectCurrentUser = createSelector(
	[selectUserStore],
	user => user.currentUser
);

// Selects user.email from the state
export const selectEmail = createSelector(
	[selectUserStore],
	user => user.email
);

// Selects user.password from the state
export const selectPassword = createSelector(
	[selectUserStore],
	user => user.password
);
