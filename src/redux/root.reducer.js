import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import servicesReducer from './services/services.reducer';
import uiReducer from './ui/ui.reducer';
import contentReducer from './content/content.reducer';

import serviceDetailReducer from './handlers/service-detail/service-detail.reducer';
import headerDetailReducer from './handlers/header-detail/header-detail.reducer';
import aboutUsDetailReducer from './handlers/about-us-detail/about-us-detail.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'services',
		'serviceDetail',
		'ui',
		'content',
		'headerDetail',
		'aboutUsDetail',
	],
};

const rootReducer = combineReducers({
	// Collections Reducers
	services: servicesReducer,
	ui: uiReducer,
	content: contentReducer,

	// Handlers Reducers
	serviceDetail: serviceDetailReducer,
	headerDetail: headerDetailReducer,
	aboutUsDetail: aboutUsDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
