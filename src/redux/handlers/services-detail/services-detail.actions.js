import ServicesDetailTypes from './services-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const createServicesStart = () => ({
	type: ServicesDetailTypes.CREATE_SERVICES_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const createServicesSuccess = () => ({
	type: ServicesDetailTypes.CREATE_SERVICES_SUCCESS,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const createServicesFailure = errorMessage => ({
	type: ServicesDetailTypes.CREATE_SERVICES_FAILURE,
	payload: errorMessage,
});
