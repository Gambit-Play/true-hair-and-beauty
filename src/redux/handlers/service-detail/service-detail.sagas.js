import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import {
	createCollectionAndDocuments,
	deleteDocuments,
	updateDocument,
} from '../../../firebase/firebase.utils';
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
	fetchServiceStart as updateReducer,
	fetchServiceSuccess,
	fetchServiceFailure,
	toggleEditStart,
	pushNewServicesSuccess,
	pushNewServicesFailure,
	deleteServicesSuccess,
	deleteServicesFailure,
	newServiceFailure,
	newServiceSuccess,
	deleteMainServicesSuccess,
	deleteMainServicesFailure,
} from './service-detail.actions';
import { toggleModal } from '../../ui/ui.actions';

// Selectors
import { selectCurrentServices } from '../../services/services.selectors';
import {
	selectServices,
	selectServiceDetail,
} from './service-detail.selectors';

/* ================================================================ */
/*  Reusable Actions                                                */
/* ================================================================ */

export function* updateService() {
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
	} catch (error) {
		console.log(error);
	}
}

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* createServicesStart() {
	try {
		const {
			service1,
			service2,
			service3,
			image,
			order,
			typeOfService,
			services,
		} = yield select(selectServiceDetail);

		const serviceDetail = [
			{
				service1,
				service2,
				service3,
				image,
				order,
				typeOfService,
				services,
			},
		];

		yield call(
			createCollectionAndDocuments,
			COLLECTION_IDS.SERVICES,
			serviceDetail
		);

		yield put(createServicesSuccess());
	} catch (error) {
		console.log(error);
		yield put(createServicesFailure(error));
	}
}

export function* updateServicesStart() {
	try {
		yield call(updateService);
		yield put(updateServicesSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateServicesFailure(error));
	}
}

export function* deleteMainServicesStart() {
	try {
		const { id } = yield select(selectServiceDetail);

		yield call(deleteDocuments, COLLECTION_IDS.SERVICES, [id]);
		yield put(deleteMainServicesSuccess());
	} catch (error) {
		console.log(error);
		yield put(deleteMainServicesFailure(error));
	}
}

export function* pushNewServiceStart() {
	try {
		const { title, price, services } = yield select(selectServiceDetail);

		services.push({ title, price });

		yield put(pushNewServicesSuccess(services));
	} catch (error) {
		console.log(error);
		yield put(pushNewServicesFailure(error));
	}
}

export function* deleteServiceStart({ payload: { serviceIndex, mainIndex } }) {
	try {
		const { services } = yield select(selectServiceDetail);

		services.splice(serviceIndex, 1);

		yield put(deleteServicesSuccess(services));
		yield call(updateService);
		yield put(updateReducer(mainIndex, true));
	} catch (error) {
		console.log(error);
		yield put(deleteServicesFailure(error));
	}
}

export function* addNewServiceStart({ payload: serviceIndex }) {
	try {
		yield call(pushNewServiceStart);
		yield call(updateService);
		yield put(addNewServicesSuccess());
		yield put(updateReducer(serviceIndex, true));
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
		const services = yield select(selectCurrentServices);
		const service = services[serviceIndex];

		yield put(fetchServiceSuccess(service));
		yield isAdminFetch ? put(toggleEditStart()) : put(toggleModal());
	} catch (error) {
		console.log(error);
		yield put(fetchServiceFailure(error));
	}
}

export function* newServiceStart() {
	try {
		const currentServices = yield select(selectCurrentServices);
		const order = currentServices.length + 1;

		yield put(newServiceSuccess(order));
	} catch (error) {
		console.log(error);
		yield put(newServiceFailure(error));
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

export function* onDeleteMainServicesStart() {
	yield takeLatest(
		ServiceDetailTypes.DELETE_MAIN_SERVICE_START,
		deleteMainServicesStart
	);
}

export function* onDeleteServicesStart() {
	yield takeLatest(
		ServiceDetailTypes.DELETE_SERVICE_START,
		deleteServiceStart
	);
}

export function* onAddNewServicesStart() {
	yield takeLatest(
		ServiceDetailTypes.ADD_NEW_SERVICE_START,
		addNewServiceStart
	);
}

export function* onSetServicesStart() {
	yield takeLatest(ServiceDetailTypes.SET_SERVICE_START, setServicesStart);
}

export function* onFetchServiceStart() {
	yield takeLatest(ServiceDetailTypes.FETCH_SERVICE_START, fetchServiceStart);
}

export function* onNewServiceStart() {
	yield takeLatest(ServiceDetailTypes.NEW_SERVICE_START, newServiceStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* servicesDetailSagas() {
	yield all([
		call(onCreateServicesStart),
		call(onDeleteMainServicesStart),
		call(onUpdateServicesStart),
		call(onDeleteServicesStart),
		call(onFetchServiceStart),
		call(onNewServiceStart),
		call(onSetServicesStart),
		call(onAddNewServicesStart),
	]);
}
