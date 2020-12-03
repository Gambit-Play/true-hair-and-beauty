import UserActionTypes from './user.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const emailSignInStart = () => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
});

export const setLoginCredentials = (inputName, value) => ({
	type: UserActionTypes.SET_LOGIN_CREDENTIALS,
	payload: { inputName, value },
});

export const clearLoginCredentials = () => ({
	type: UserActionTypes.CLEAR_LOGIN_CREDENTIALS,
});

export const logOut = () => ({
	type: UserActionTypes.LOG_OUT,
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
