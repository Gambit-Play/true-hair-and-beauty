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

export const fetchServiceFailure = errorMessage => ({
	type: ServiceDetailTypes.FETCH_SERVICE_FAILURE,
	payload: errorMessage,
});
