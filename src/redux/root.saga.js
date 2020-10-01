import { all, call } from 'redux-saga/effects';

import servicesDetailSagas from './handlers/services-detail/services-detail.sagas';

export default function* rootSaga() {
	yield all([call(servicesDetailSagas)]);
}
