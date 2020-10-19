import ServiceDetailTypes from './service-detail.types';

const INITIAL_STATE = {
	id: '',
	service1: '0',
	service2: '',
	service3: '',
	image: '',
	typeOfService: '',
	services: [],
	errorMessage: '',
	isEdit: false,
};

const serviceDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case ServiceDetailTypes.EDIT_SERVICE:
			return {
				...state,
				isEdit: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case ServiceDetailTypes.FETCH_SERVICE_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				service1: action.payload.service1,
				service2: action.payload.service2,
				service3: action.payload.service3,
				image: action.payload.image,
				typeOfService: action.payload.typeOfService,
				services: action.payload.services,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case ServiceDetailTypes.CREATE_SERVICE_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Clear Data                                              */
		/* ================================================================ */
		case ServiceDetailTypes.CLEAR_SERVICE:
			return {
				...state,
				id: '',
				service1: '0',
				service2: '',
				service3: '',
				image: '',
				typeOfService: '',
				services: [],
				errorMessage: '',
				isEdit: false,
			};
		default:
			return state;
	}
};

export default serviceDetailReducer;
