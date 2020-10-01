import ServicesDetailActionTypes from './services-detail.types';

const INITIAL_STATE = {
	currentServices: [],
	errorMessage: '',
};

const servicesDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case ServicesDetailActionTypes.CREATE_CATEGORY_SUCCESS:
			return {
				...state,
				currentServices: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case ServicesDetailActionTypes.CREATE_SERVICES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default servicesDetailReducer;
