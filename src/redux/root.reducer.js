import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import servicesReducer from './services/services.reducer';
import uiReducer from './ui/ui.reducer';

import servicesDetailReducer from './handlers/services-detail/services-detail.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['services', 'servicesDetail', 'ui'],
};

const rootReducer = combineReducers({
	services: servicesReducer,
	ui: uiReducer,

	// Handlers Reducers
	servicesDetail: servicesDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
