import ServiceDetailTypes from './service-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const createServicesStart = () => ({
	type: ServiceDetailTypes.CREATE_SERVICE_START,
});

export const fetchServiceStart = (serviceIndex, isAdminFetch) => ({
	type: ServiceDetailTypes.FETCH_SERVICE_START,
	payload: { serviceIndex, isAdminFetch },
});

export const setServiceStart = (index, inputName, value) => ({
	type: ServiceDetailTypes.SET_SERVICE_START,
	payload: { index, inputName, value },
});

export const setOtherServiceStart = (inputName, value) => ({
	type: ServiceDetailTypes.SET_OTHER_SERVICE,
	payload: { inputName, value },
});

export const toggleEditStart = () => ({
	type: ServiceDetailTypes.EDIT_SERVICE,
});

export const clearService = () => ({
	type: ServiceDetailTypes.CLEAR_SERVICE,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const createServicesSuccess = () => ({
	type: ServiceDetailTypes.CREATE_SERVICE_SUCCESS,
});

export const setServiceSuccess = services => ({
	type: ServiceDetailTypes.SET_SERVICE_SUCCESS,
	payload: services,
});

export const fetchServiceSuccess = service => ({
	type: ServiceDetailTypes.FETCH_SERVICE_SUCCESS,
	payload: service,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const createServicesFailure = errorMessage => ({
	type: ServiceDetailTypes.CREATE_SERVICE_FAILURE,
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
