import { all, call } from 'redux-saga/effects';

import servicesSagas from './services/services.sagas';

import servicesDetailSagas from './handlers/services-detail/services-detail.sagas';

export default function* rootSaga() {
	yield all([call(servicesSagas), call(servicesDetailSagas)]);
}
