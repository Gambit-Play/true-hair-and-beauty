import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Types
import FooterDetailTypes from './footer-detail.types';

// Actions
import {
	fetchFooterSuccess,
	fetchFooterFailure,
	toggleEditStart,
} from './footer-detail.actions';

// Selectors
import { selectFooterSection } from '../../content/content.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchFooterStart() {
	try {
		const aboutSection = yield select(selectFooterSection);

		yield put(fetchFooterSuccess(aboutSection));
		yield put(toggleEditStart());
	} catch (error) {
		console.log(error);
		yield put(fetchFooterFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchFooterStart() {
	yield takeLatest(FooterDetailTypes.FETCH_FOOTER_START, fetchFooterStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* footerDetailSagas() {
	yield all([call(onFetchFooterStart)]);
}
