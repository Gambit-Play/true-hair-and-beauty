import ServiceDetailTypes from './service-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const createServicesStart = () => ({
	type: ServiceDetailTypes.CREATE_SERVICES_START,
});

export const fetchServiceStart = serviceIndex => ({
	type: ServiceDetailTypes.FETCH_SERVICE_START,
	payload: serviceIndex,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const createServicesSuccess = () => ({
	type: ServiceDetailTypes.CREATE_SERVICES_SUCCESS,
});

export const fetchServiceSuccess = service => ({
	type: ServiceDetailTypes.FETCH_SERVICE_SUCCESS,
	payload: service,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const createServicesFailure = errorMessage => ({
	type: ServiceDetailTypes.CREATE_SERVICES_FAILURE,
	payload: errorMessage,
});

export const fetchServiceFailure = errorMessage => ({
	type: ServiceDetailTypes.FETCH_SERVICE_FAILURE,
	payload: errorMessage,
});
