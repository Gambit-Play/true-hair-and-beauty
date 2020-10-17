import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Types
import AboutUsDetailTypes from './about-us-detail.types';

// Actions
import {
	fetchAboutUsSuccess,
	fetchAboutUsFailure,
	toggleEditStart,
} from './about-us-detail.actions';

// Selectors
import { selectAboutUsSection } from '../../content/content.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchAboutUsStart() {
	try {
		const aboutSection = yield select(selectAboutUsSection);

		yield put(fetchAboutUsSuccess(aboutSection));
		yield put(toggleEditStart());
	} catch (error) {
		console.log(error);
		yield put(fetchAboutUsFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchAboutUsStart() {
	yield takeLatest(
		AboutUsDetailTypes.FETCH_ABOUT_US_START,
		fetchAboutUsStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* aboutUsDetailSagas() {
	yield all([call(onFetchAboutUsStart)]);
}
