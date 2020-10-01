import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { createCollectionAndDocuments } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Types
import ServicesDetailTypes from './services-detail.types';

// Actions
import {
	createServicesSuccess,
	createServicesFailure,
} from './services-detail.actions';

// Selectors
import { selectCurrenServices } from './services-detail.selectors';

// Data
import { data } from '../../../data/data.schema';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* createServicesStart() {
	try {
		yield call(createCollectionAndDocuments, COLLECTION_IDS.SERVICES, data);
		yield put(createServicesSuccess());
	} catch (error) {
		console.log(error);
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onCreateServicesStart() {
	yield takeLatest(
		ServicesDetailTypes.CREATE_SERVICES_START,
		createServicesStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* servicesDetailSagas() {
	yield all([call(onCreateServicesStart)]);
}
