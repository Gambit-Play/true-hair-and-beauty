import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
// import { createCollectionAndDocuments } from '../../../firebase/firebase.utils';
// import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Types
import ServiceDetailTypes from './service-detail.types';

// Actions
import {
	createServicesSuccess,
	createServicesFailure,
	fetchServiceSuccess,
	fetchServiceFailure,
	toggleEditStart,
} from './service-detail.actions';
import { toggleModal } from '../../ui/ui.actions';

// Selectors
import { selectCurrenServices } from '../../services/services.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* createServicesStart() {
	try {
		yield put(createServicesSuccess());
	} catch (error) {
		console.log(error);
		yield put(createServicesFailure(error));
	}
}

export function* fetchServiceStart({
	payload: { serviceIndex, isAdminFetch },
}) {
	try {
		const arr = yield select(selectCurrenServices);
		const currentService = arr[serviceIndex];

		yield put(fetchServiceSuccess(currentService));
		yield isAdminFetch ? put(toggleEditStart()) : put(toggleModal());
	} catch (error) {
		console.log(error);
		yield put(fetchServiceFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onCreateServicesStart() {
	yield takeLatest(
		ServiceDetailTypes.CREATE_SERVICE_START,
		createServicesStart
	);
}

export function* onFetchServiceStart() {
	yield takeLatest(ServiceDetailTypes.FETCH_SERVICE_START, fetchServiceStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* servicesDetailSagas() {
	yield all([call(onCreateServicesStart), call(onFetchServiceStart)]);
}
