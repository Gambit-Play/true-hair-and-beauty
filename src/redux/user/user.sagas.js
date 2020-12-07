import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase utils
import { auth } from '../../firebase/firebase.utils';

// Types
import UserTypes from './user.types';

// Actions
import {
	emailSignInSuccess,
	emailSignInFailure,
	clearLoginCredentials,
} from './user.actions';

// Selectors
import { selectEmail, selectPassword } from './user.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* emailSignInStart() {
	try {
		const email = yield select(selectEmail);
		const password = yield select(selectPassword);

		const { user } = yield auth.signInWithEmailAndPassword(email, password);

		yield put(emailSignInSuccess({ uid: user.uid }));
		yield put(clearLoginCredentials());
	} catch (error) {
		console.log('Login error: ', error.message);
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
