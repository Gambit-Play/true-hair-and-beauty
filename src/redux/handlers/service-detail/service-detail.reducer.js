import ServiceDetailTypes from './service-detail.types';

const INITIAL_STATE = {
	id: '',
	typeOfService: '',
	services: [],
	errorMessage: '',
};

const serviceDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case ServiceDetailTypes.FETCH_SERVICE_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				typeOfService: action.payload.typeOfService,
				services: action.payload.services,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case ServiceDetailTypes.CREATE_SERVICES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default serviceDetailReducer;
