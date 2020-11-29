import UserActionTypes from './user.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const emailSignInStart = () => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const emailSignInSuccess = user => ({
	type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
	payload: user,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const emailSignInFailure = errorMessage => ({
	type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
	payload: errorMessage,
});
