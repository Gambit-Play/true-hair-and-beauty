import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { updateDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Types
import ServiceDetailTypes from './service-detail.types';

// Actions
import {
	createServicesSuccess,
	createServicesFailure,
	updateServicesSuccess,
	updateServicesFailure,
	addNewServicesSuccess,
	addNewServicesFailure,
	setServiceSuccess,
	setServiceFailure,
	fetchServiceSuccess,
	fetchServiceFailure,
	toggleEditStart,
} from './service-detail.actions';
import { toggleModal } from '../../ui/ui.actions';

// Selectors
import { selectCurrenServices } from '../../services/services.selectors';
import {
	selectServices,
	selectServiceDetail,
} from './service-detail.selectors';

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

export function* updateServicesStart() {
	try {
		const {
			id,
			service1,
			service2,
			service3,
			image,
			order,
			typeOfService,
			services,
		} = yield select(selectServiceDetail);

		const updatedServiceDetail = {
			id,
			service1,
			service2,
			service3,
			image,
			order,
			typeOfService,
			services,
		};

		yield call(
			updateDocument,
			COLLECTION_IDS.SERVICES,
			id,
			updatedServiceDetail
		);
		yield put(updateServicesSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateServicesFailure(error));
	}
}

export function* addNewServicesStart() {
	try {
		const { title, price, services } = yield select(selectServiceDetail);

		services.push({ title, price });

		yield put(addNewServicesSuccess(services));
	} catch (error) {
		console.log(error);
		yield put(addNewServicesFailure(error));
	}
}

export function* setServicesStart({ payload: { index, inputName, value } }) {
	try {
		const services = yield select(selectServices);

		services[index][inputName] = value;

		yield put(setServiceSuccess(services));
	} catch (error) {
		console.log(error);
		yield put(setServiceFailure(error));
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

export function* onUpdateServicesStart() {
	yield takeLatest(
		ServiceDetailTypes.UPDATE_SERVICE_START,
		updateServicesStart
	);
}

export function* onAddNewServicesStart() {
	yield takeLatest(
		ServiceDetailTypes.ADD_NEW_SERVICE_START,
		addNewServicesStart
	);
}

export function* onSetServicesStart() {
	yield takeLatest(ServiceDetailTypes.SET_SERVICE_START, setServicesStart);
}

export function* onFetchServiceStart() {
	yield takeLatest(ServiceDetailTypes.FETCH_SERVICE_START, fetchServiceStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* servicesDetailSagas() {
	yield all([
		call(onCreateServicesStart),
		call(onFetchServiceStart),
		call(onSetServicesStart),
		call(onUpdateServicesStart),
		call(onAddNewServicesStart),
	]);
}
