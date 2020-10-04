import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { createCollectionAndDocuments } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Types
import ServiceDetailTypes from './service-detail.types';

// Actions
import {
	createServicesSuccess,
	createServicesFailure,
	fetchServiceSuccess,
	fetchServiceFailure,
} from './service-detail.actions';
import { toggleModal } from '../../ui/ui.actions';

// Selectors
import { selectCurrenServices } from '../../services/services.selectors';

// Data
import { data } from '../../../data/data.schema';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* createServicesStart() {
	try {
		// yield call(createCollectionAndDocuments, COLLECTION_IDS.SERVICES, /* data */);
		yield put(createServicesSuccess());
	} catch (error) {
		console.log(error);
		yield put(createServicesFailure(error));
	}
}

export function* fetchServiceStart({ payload: serviceIndex }) {
	try {
		const arr = yield select(selectCurrenServices);
		const currentService = arr[serviceIndex];
		console.log(
			'@@@@@ fetchServiceStart - currentService:',
			currentService
		);
		yield put(fetchServiceSuccess(currentService));
		yield put(toggleModal());
	} catch (error) {
		console.log(error);
		yield put(createServicesFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onCreateServicesStart() {
	yield takeLatest(
		ServiceDetailTypes.CREATE_SERVICES_START,
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
