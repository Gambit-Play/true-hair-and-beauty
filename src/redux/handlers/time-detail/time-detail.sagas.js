import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { updateDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Types
import TimeDetailTypes from './time-detail.types';

// Actions
import {
	fetchTimeSuccess,
	fetchTimeFailure,
	updateTimeSuccess,
	updateTimeFailure,
	toggleEditStart,
} from './time-detail.actions';

// Selectors
import { selectTimeDetail } from './time-detail.selectors';
import { selectTimeSection } from '../../content/content.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchTimeStart() {
	try {
		const timeSection = yield select(selectTimeSection);

		const newTimeSection = {
			maandag: timeSection.maandag.time,
			dinsdag: timeSection.dinsdag.time,
			woensdag: timeSection.woensdag.time,
			donderdag: timeSection.donderdag.time,
			vrijdag: timeSection.vrijdag.time,
			zaterdag: timeSection.zaterdag.time,
			zondag: timeSection.zondag.time,
		};

		yield put(fetchTimeSuccess(newTimeSection));
		yield put(toggleEditStart());
	} catch (error) {
		console.log(error);
		yield put(fetchTimeFailure(error));
	}
}

export function* updateTimeStart() {
	try {
		const timeSection = yield select(selectTimeSection);
		const {
			maandag,
			dinsdag,
			woensdag,
			donderdag,
			vrijdag,
			zaterdag,
			zondag,
		} = yield select(selectTimeDetail);

		timeSection.maandag.time = maandag;
		timeSection.dinsdag.time = dinsdag;
		timeSection.woensdag.time = woensdag;
		timeSection.donderdag.time = donderdag;
		timeSection.vrijdag.time = vrijdag;
		timeSection.zaterdag.time = zaterdag;
		timeSection.zondag.time = zondag;

		yield call(
			updateDocument,
			COLLECTION_IDS.CONTENT,
			timeSection.id,
			timeSection
		);

		yield put(updateTimeSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateTimeFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchTimeStart() {
	yield takeLatest(TimeDetailTypes.FETCH_TIME_START, fetchTimeStart);
}

export function* onUpdateTimeStart() {
	yield takeLatest(TimeDetailTypes.UPDATE_TIME_START, updateTimeStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* timeDetailSagas() {
	yield all([call(onFetchTimeStart), call(onUpdateTimeStart)]);
}
