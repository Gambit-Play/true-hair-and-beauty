import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { updateDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Types
import FooterDetailTypes from './footer-detail.types';

// Actions
import {
	fetchFooterSuccess,
	fetchFooterFailure,
	updateFooterSuccess,
	updateFooterFailure,
	toggleEditStart,
} from './footer-detail.actions';

// Selectors
import { selectFooterDetail } from './footer-detail.selectors';
import { selectFooterSection } from '../../content/content.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchFooterStart() {
	try {
		const footerSection = yield select(selectFooterSection);

		yield put(fetchFooterSuccess(footerSection));
		yield put(toggleEditStart());
	} catch (error) {
		console.log(error);
		yield put(fetchFooterFailure(error));
	}
}

export function* updateFooterStart() {
	try {
		const { id, email, adres, tel } = yield select(selectFooterDetail);

		const updatedFooterDetail = { id, email, adres, tel };

		yield call(
			updateDocument,
			COLLECTION_IDS.CONTENT,
			id,
			updatedFooterDetail
		);
		yield put(updateFooterSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateFooterFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchFooterStart() {
	yield takeLatest(FooterDetailTypes.FETCH_FOOTER_START, fetchFooterStart);
}

export function* onUpdateFooterStart() {
	yield takeLatest(FooterDetailTypes.UPDATE_FOOTER_START, updateFooterStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* footerDetailSagas() {
	yield all([call(onFetchFooterStart), call(onUpdateFooterStart)]);
}
