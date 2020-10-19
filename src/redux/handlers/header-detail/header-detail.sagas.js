import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Types
import HeaderDetailTypes from './header-detail.types';

// Actions
import {
	fetchHeaderSuccess,
	fetchHeaderFailure,
	toggleEditStart,
} from './header-detail.actions';

// Selectors
import { selectHeaderSection } from '../../content/content.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchHeaderStart() {
	try {
		const headerSection = yield select(selectHeaderSection);

		yield put(fetchHeaderSuccess(headerSection));
		yield put(toggleEditStart());
	} catch (error) {
		console.log(error);
		yield put(fetchHeaderFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchHeaderStart() {
	yield takeLatest(HeaderDetailTypes.FETCH_HEADER_START, fetchHeaderStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* headerDetailSagas() {
	yield all([call(onFetchHeaderStart)]);
}
