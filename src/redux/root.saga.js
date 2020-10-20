import { all, call } from 'redux-saga/effects';

import servicesSagas from './services/services.sagas';
import contentSagas from './content/content.sagas';

import servicesDetailSagas from './handlers/service-detail/service-detail.sagas';
import headerDetailSagas from './handlers/header-detail/header-detail.sagas';
import aboutUsDetailSagas from './handlers/about-us-detail/about-us-detail.sagas';
import timeDetailSagas from './handlers/time-detail/time-detail.sagas';
import footerDetailSagas from './handlers/footer-detail/footer-detail.sagas';

export default function* rootSaga() {
	yield all([
		call(servicesSagas),
		call(contentSagas),
		call(servicesDetailSagas),
		call(headerDetailSagas),
		call(aboutUsDetailSagas),
		call(timeDetailSagas),
		call(footerDetailSagas),
	]);
}
