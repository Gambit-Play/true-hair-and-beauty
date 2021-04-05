import ServiceDetailTypes from './service-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const createServicesStart = () => ({
	type: ServiceDetailTypes.CREATE_SERVICE_START,
});

export const updateServicesStart = () => ({
	type: ServiceDetailTypes.UPDATE_SERVICE_START,
});

export const deleteMainServicesStart = () => ({
	type: ServiceDetailTypes.DELETE_MAIN_SERVICE_START,
});

export const deleteServiceStart = (serviceIndex, mainIndex) => ({
	type: ServiceDetailTypes.DELETE_SERVICE_START,
	payload: { serviceIndex, mainIndex },
});

export const addNewServicesStart = serviceIndex => ({
	type: ServiceDetailTypes.ADD_NEW_SERVICE_START,
	payload: serviceIndex,
});

export const pushNewServicesStart = () => ({
	type: ServiceDetailTypes.PUSH_NEW_SERVICE_START,
});

export const fetchServiceStart = (serviceIndex, isAdminFetch) => ({
	type: ServiceDetailTypes.FETCH_SERVICE_START,
	payload: { serviceIndex, isAdminFetch },
});

export const newServiceStart = () => ({
	type: ServiceDetailTypes.NEW_SERVICE_START,
});

export const setServiceStart = (index, inputName, value) => ({
	type: ServiceDetailTypes.SET_SERVICE_START,
	payload: { index, inputName, value },
});

export const setOtherServiceStart = (inputName, value) => ({
	type: ServiceDetailTypes.SET_OTHER_SERVICE,
	payload: { inputName, value },
});

export const setNewServiceStart = (inputName, value) => ({
	type: ServiceDetailTypes.SET_NEW_SERVICE,
	payload: { inputName, value },
});

export const toggleEditStart = () => ({
	type: ServiceDetailTypes.EDIT_SERVICE,
});

export const clearService = () => ({
	type: ServiceDetailTypes.CLEAR_SERVICE,
});

export const clearNewService = () => ({
	type: ServiceDetailTypes.CLEAR_NEW_SERVICE,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const createServicesSuccess = () => ({
	type: ServiceDetailTypes.CREATE_SERVICE_SUCCESS,
});

export const updateServicesSuccess = () => ({
	type: ServiceDetailTypes.UPDATE_SERVICE_SUCCESS,
});

export const deleteMainServicesSuccess = () => ({
	type: ServiceDetailTypes.DELETE_MAIN_SERVICE_SUCCESS,
});

export const deleteServicesSuccess = services => ({
	type: ServiceDetailTypes.DELETE_SERVICE_SUCCESS,
	payload: services,
});

export const addNewServicesSuccess = services => ({
	type: ServiceDetailTypes.ADD_NEW_SERVICE_SUCCESS,
	payload: services,
});

export const pushNewServicesSuccess = services => ({
	type: ServiceDetailTypes.PUSH_NEW_SERVICE_SUCCESS,
	payload: services,
});

export const setServiceSuccess = services => ({
	type: ServiceDetailTypes.SET_SERVICE_SUCCESS,
	payload: services,
});

export const fetchServiceSuccess = service => ({
	type: ServiceDetailTypes.FETCH_SERVICE_SUCCESS,
	payload: service,
});

export const newServiceSuccess = order => ({
	type: ServiceDetailTypes.NEW_SERVICE_SUCCESS,
	payload: order,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const createServicesFailure = errorMessage => ({
	type: ServiceDetailTypes.CREATE_SERVICE_FAILURE,
	payload: errorMessage,
});

export const updateServicesFailure = errorMessage => ({
	type: ServiceDetailTypes.UPDATE_SERVICE_FAILURE,
	payload: errorMessage,
});

export const deleteMainServicesFailure = errorMessage => ({
	type: ServiceDetailTypes.DELETE_MAIN_SERVICE_FAILURE,
	payload: errorMessage,
});

export const deleteServicesFailure = errorMessage => ({
	type: ServiceDetailTypes.DELETE_SERVICE_FAILURE,
	payload: errorMessage,
});

export const addNewServicesFailure = errorMessage => ({
	type: ServiceDetailTypes.ADD_NEW_SERVICE_FAILURE,
	payload: errorMessage,
});

export const pushNewServicesFailure = errorMessage => ({
	type: ServiceDetailTypes.PUSH_NEW_SERVICE_FAILURE,
	payload: errorMessage,
});

export const setServiceFailure = errorMessage => ({
	type: ServiceDetailTypes.SET_SERVICE_FAILURE,
	payload: errorMessage,
});

export const fetchServiceFailure = errorMessage => ({
	type: ServiceDetailTypes.FETCH_SERVICE_FAILURE,
	payload: errorMessage,
});

export const newServiceFailure = errorMessage => ({
	type: ServiceDetailTypes.NEW_SERVICE_FAILURE,
	payload: errorMessage,
});
