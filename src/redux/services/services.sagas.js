import { takeLatest, put, all, call } from 'redux-saga/effects';

// Redux
import { sagaMiddleware } from '../store';

// Firebase
import { getCollectionOrderBy } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Types
import ServicesTypes from './services.types';

// Actions
import {
	fetchServicesCollectionSuccess,
	fetchServicesCollectionFailure,
} from './services.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribe;

export function* fetchServicesCollectionStart() {
	try {
		const collectionRef = yield call(
			getCollectionOrderBy,
			COLLECTION_IDS.SERVICES,
			'order',
			'asc'
		);

		unsubscribe = yield collectionRef.onSnapshot(snapshot => {
			const services = snapshot.docs.map(doc => {
				const result = doc.data();

				return result;
			});

			sagaMiddleware.run(fetchCurrentServices, services);
		});
	} catch (error) {
		console.log(error);
		yield put(fetchServicesCollectionFailure(error));
	}
}

export function* fetchCurrentServices(services) {
	yield put(fetchServicesCollectionSuccess(services));
}

export function* removeCollectionListener() {
	yield call(unsubscribe);
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchServicesCollectionStart() {
	yield takeLatest(
		ServicesTypes.FETCH_SERVICES_COLLECTION_START,
		fetchServicesCollectionStart
	);
}

export function* onremoveListenerStart() {
	yield takeLatest(
		ServicesTypes.REMOVE_SERVICES_COLLECTION_LISTENER,
		removeCollectionListener
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* servicesSagas() {
	yield all([
		call(onFetchServicesCollectionStart),
		call(onremoveListenerStart),
	]);
}
