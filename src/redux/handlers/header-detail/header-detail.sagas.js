import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { updateDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Types
import HeaderDetailTypes from './header-detail.types';

// Actions
import {
	fetchHeaderStart as updateHeader,
	fetchHeaderSuccess,
	fetchHeaderFailure,
	updateHeaderSuccess,
	updateHeaderFailure,
	toggleEditStart,
} from './header-detail.actions';

// Selectors
import { selectHeaderSection } from '../../content/content.selectors';
import { selectHeaderDetail } from './header-detail.selectors';

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

export function* updateHeaderStart() {
	try {
		const { id, bottomText, topText } = yield select(selectHeaderDetail);

		const updatedHeaderDetail = { id, bottomText, topText };

		yield call(
			updateDocument,
			COLLECTION_IDS.CONTENT,
			id,
			updatedHeaderDetail
		);
		yield put(updateHeaderSuccess());
		yield put(updateHeader());
	} catch (error) {
		console.log(error);
		yield put(updateHeaderFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchHeaderStart() {
	yield takeLatest(HeaderDetailTypes.FETCH_HEADER_START, fetchHeaderStart);
}

export function* onUpdateHeaderStart() {
	yield takeLatest(HeaderDetailTypes.UPDATE_HEADER_START, updateHeaderStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* headerDetailSagas() {
	yield all([call(onFetchHeaderStart), call(onUpdateHeaderStart)]);
}
