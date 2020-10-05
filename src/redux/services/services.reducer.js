import ServicesTypes from './services.types';

const INITIAL_STATE = {
	currentServices: [],
	isFetching: true,
	errorMessage: '',
};

const servicesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case ServicesTypes.FETCH_SERVICES_COLLECTION_START:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case ServicesTypes.FETCH_SERVICES_COLLECTION_SUCCESS:
			return {
				...state,
				currentServices: action.payload,
				isFetching: false,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case ServicesTypes.FETCH_SERVICES_COLLECTION_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
				isFetching: false,
			};
		default:
			return state;
	}
};

export default servicesReducer;
