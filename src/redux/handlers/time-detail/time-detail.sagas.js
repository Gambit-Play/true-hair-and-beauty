import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Types
import TimeDetailTypes from './time-detail.types';

// Actions
import {
	fetchTimeSuccess,
	fetchTimeFailure,
	toggleEditStart,
} from './time-detail.actions';

// Selectors
import { selectTimeSection } from '../../content/content.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchTimeStart() {
	try {
		const timeSection = yield select(selectTimeSection);

		yield put(fetchTimeSuccess(timeSection));
		yield put(toggleEditStart());
	} catch (error) {
		console.log(error);
		yield put(fetchTimeFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchTimeStart() {
	yield takeLatest(TimeDetailTypes.FETCH_TIME_START, fetchTimeStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* timeDetailSagas() {
	yield all([call(onFetchTimeStart)]);
}
