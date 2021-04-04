import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root.saga';
import rootReducer from './root.reducer';

export const sagaMiddleware = createSagaMiddleware();

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middlewares = [sagaMiddleware];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);

	// Redux DevTool
	composeEnhancers =
		(reduxDevTool &&
			reduxDevTool({
				trace: true,
				traceLimit: 25,
			})) ||
		compose;
}

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
