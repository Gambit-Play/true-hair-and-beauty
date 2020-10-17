import { all, call } from 'redux-saga/effects';

import servicesSagas from './services/services.sagas';
import contentSagas from './content/content.sagas';

import servicesDetailSagas from './handlers/service-detail/service-detail.sagas';
import headerDetailSagas from './handlers/header-detail/header-detail.sagas';

export default function* rootSaga() {
	yield all([
		call(servicesSagas),
		call(contentSagas),
		call(servicesDetailSagas),
		call(headerDetailSagas),
	]);
}
