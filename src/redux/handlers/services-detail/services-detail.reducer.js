import ServicesDetailTypes from './services-detail.types';

const INITIAL_STATE = {
	errorMessage: '',
};

const servicesDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case ServicesDetailTypes.CREATE_SERVICES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default servicesDetailReducer;
