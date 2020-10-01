import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import servicesDetailReducer from './handlers/services-detail/services-detail.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['servicesDetail'],
};

const rootReducer = combineReducers({
	servicesDetail: servicesDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
