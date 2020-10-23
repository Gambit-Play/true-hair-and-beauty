import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { updateDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Types
import AboutUsDetailTypes from './about-us-detail.types';

// Actions
import {
	fetchAboutUsSuccess,
	fetchAboutUsFailure,
	updateAboutUsSuccess,
	updateAboutUsFailure,
	toggleEditStart,
} from './about-us-detail.actions';

// Selectors
import { selectAboutUsSection } from '../../content/content.selectors';
import { selectAboutUsDetail } from './about-us-detail.selectors';

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

export function* updateAboutUsStart() {
	try {
		const { id, title, body } = yield select(selectAboutUsDetail);

		const updatedAboutUsDetail = { id, title, body };

		yield call(
			updateDocument,
			COLLECTION_IDS.CONTENT,
			id,
			updatedAboutUsDetail
		);

		yield put(updateAboutUsSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateAboutUsFailure(error));
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

export function* onUpdateAboutUsStart() {
	yield takeLatest(
		AboutUsDetailTypes.UPDATE_ABOUT_US_START,
		updateAboutUsStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* aboutUsDetailSagas() {
	yield all([call(onFetchAboutUsStart), call(onUpdateAboutUsStart)]);
}
