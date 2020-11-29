import { takeLatest, put, all, call } from 'redux-saga/effects';

// Types
import UserTypes from './user.types';

// Actions
import { emailSignInSuccess, emailSignInFailure } from './user.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* emailSignInStart() {
	try {
		console.log('@@@@@ emailSignInStart - Start is successful');
	} catch (error) {
		console.log(error);
		yield put(emailSignInFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onEmailSignInStart() {
	yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, emailSignInStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* userSagas() {
	yield all([call(onEmailSignInStart)]);
}
