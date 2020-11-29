import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import servicesReducer from './services/services.reducer';
import uiReducer from './ui/ui.reducer';
import contentReducer from './content/content.reducer';
import userReducer from './user/user.reducer';

import serviceDetailReducer from './handlers/service-detail/service-detail.reducer';
import headerDetailReducer from './handlers/header-detail/header-detail.reducer';
import aboutUsDetailReducer from './handlers/about-us-detail/about-us-detail.reducer';
import timeDetailReducer from './handlers/time-detail/time-detail.reducer';
import footerDetailReducer from './handlers/footer-detail/footer-detail.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'ui',
		'services',
		'content',
		'user',
		'serviceDetail',
		'headerDetail',
		'aboutUsDetail',
		'timeDetail',
		'footerDetail',
	],
};

const rootReducer = combineReducers({
	// Collections Reducers
	ui: uiReducer,
	services: servicesReducer,
	content: contentReducer,
	user: userReducer,

	// Handlers Reducers
	serviceDetail: serviceDetailReducer,
	headerDetail: headerDetailReducer,
	aboutUsDetail: aboutUsDetailReducer,
	timeDetail: timeDetailReducer,
	footerDetail: footerDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
