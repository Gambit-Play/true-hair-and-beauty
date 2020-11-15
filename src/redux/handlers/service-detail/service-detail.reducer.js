import ServiceDetailTypes from './service-detail.types';

const INITIAL_STATE = {
	id: '',
	service1: '',
	service2: '',
	service3: '',
	image: '',
	order: 0,
	typeOfService: '',
	services: [],
	errorMessage: '',
	isEdit: false,
	isNew: false,

	// New service
	title: '',
	price: 0,
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
		case ServiceDetailTypes.SET_NEW_SERVICE:
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
				errorMessage: '',
			};
		case ServiceDetailTypes.NEW_SERVICE_SUCCESS:
			return {
				...state,
				id: '',
				service1: '',
				service2: '',
				service3: '',
				order: action.payload,
				image: '',
				typeOfService: '',
				services: [],
				errorMessage: '',
				isNew: true,
			};
		case ServiceDetailTypes.SET_SERVICE_SUCCESS:
		case ServiceDetailTypes.DELETE_SERVICE_SUCCESS:
			return {
				...state,
				services: action.payload,
				errorMessage: '',
			};
		case ServiceDetailTypes.PUSH_NEW_SERVICE_SUCCESS:
			return {
				...state,
				services: action.payload,
				title: '',
				price: 0,
				errorMessage: '',
			};
		case ServiceDetailTypes.ADD_NEW_SERVICE_SUCCESS:
			return {
				...state,
				errorMessage: '',
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case ServiceDetailTypes.CREATE_SERVICE_FAILURE:
		case ServiceDetailTypes.UPDATE_SERVICE_FAILURE:
		case ServiceDetailTypes.PUSH_NEW_SERVICE_FAILURE:
		case ServiceDetailTypes.ADD_NEW_SERVICE_FAILURE:
		case ServiceDetailTypes.SET_SERVICE_FAILURE:
		case ServiceDetailTypes.FETCH_SERVICE_FAILURE:
		case ServiceDetailTypes.NEW_SERVICE_FAILURE:
		case ServiceDetailTypes.DELETE_MAIN_SERVICE_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Clear Data                                              */
		/* ================================================================ */
		case ServiceDetailTypes.CLEAR_NEW_SERVICE:
			return {
				...state,
				title: '',
				price: 0,
			};
		case ServiceDetailTypes.CLEAR_SERVICE:
		case ServiceDetailTypes.UPDATE_SERVICE_SUCCESS:
		case ServiceDetailTypes.CREATE_SERVICE_SUCCESS:
		case ServiceDetailTypes.DELETE_MAIN_SERVICE_SUCCESS:
			return {
				...state,
				id: '',
				service1: '',
				service2: '',
				service3: '',
				image: '',
				typeOfService: '',
				services: [],
				errorMessage: '',
				isEdit: false,
				isNew: false,
			};
		default:
			return state;
	}
};

export default serviceDetailReducer;
