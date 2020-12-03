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

		console.log('@@@@@ emailSignInStart - email:', email);
		console.log('@@@@@ emailSignInStart - password:', password);

		const { user } = yield auth.signInWithEmailAndPassword(email, password);

		console.log('@@@@@ emailSignInStart - user.uid:', { uid: user.uid });

		yield put(emailSignInSuccess({ uid: user.uid }));
		yield put(clearLoginCredentials());
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
