import { takeLatest, put, all, call } from 'redux-saga/effects';

// Utils
import { convertArrayToObject } from '../../utils/utils';

// Redux
import { sagaMiddleware } from '../store';

// Firebase
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Types
import ContentTypes from './content.types';

// Actions
import {
	fetchContentCollectionSuccess,
	fetchContentCollectionFailure,
} from './content.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribe;

export function* fetchContentCollectionStart() {
	try {
		const collectionRef = yield call(getCollection, COLLECTION_IDS.CONTENT);

		unsubscribe = yield collectionRef.onSnapshot(snapshot => {
			const content = snapshot.docs.map(doc => {
				const result = doc.data();

				return result;
			});

			const newContent = convertArrayToObject(content, 'id');

			sagaMiddleware.run(fetchCurrentContent, newContent);
		});
	} catch (error) {
		console.log(error);
		yield put(fetchContentCollectionFailure(error));
	}
}

export function* fetchCurrentContent(content) {
	yield put(fetchContentCollectionSuccess(content));
}

export function* removeCollectionListener() {
	yield call(unsubscribe);
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchContentCollectionStart() {
	yield takeLatest(
		ContentTypes.FETCH_CONTENT_COLLECTION_START,
		fetchContentCollectionStart
	);
}

export function* onremoveListenerStart() {
	yield takeLatest(
		ContentTypes.REMOVE_CONTENT_COLLECTION_LISTENER,
		removeCollectionListener
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* contentSagas() {
	yield all([
		call(onFetchContentCollectionStart),
		call(onremoveListenerStart),
	]);
}
