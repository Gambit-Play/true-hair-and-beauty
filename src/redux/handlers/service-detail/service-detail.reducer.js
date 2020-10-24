import ServiceDetailTypes from './service-detail.types';

const INITIAL_STATE = {
	id: '',
	service1: '0',
	service2: '',
	service3: '',
	image: '',
	order: 0,
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
		case ServiceDetailTypes.SET_OTHER_SERVICE:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
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
				order: action.payload.order,
				image: action.payload.image,
				typeOfService: action.payload.typeOfService,
				services: action.payload.services,
			};
		case ServiceDetailTypes.SET_SERVICE_SUCCESS:
			return {
				...state,
				services: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case ServiceDetailTypes.CREATE_SERVICE_FAILURE:
		case ServiceDetailTypes.UPDATE_SERVICE_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Clear Data                                              */
		/* ================================================================ */
		case ServiceDetailTypes.CLEAR_SERVICE:
		case ServiceDetailTypes.UPDATE_SERVICE_SUCCESS:
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
