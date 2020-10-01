import ServicesDetailActionTypes from './services-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const createServicesStart = () => ({
	type: ServicesDetailActionTypes.CREATE_SERVICES_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const createServicesSuccess = services => ({
	type: ServicesDetailActionTypes.CREATE_SERVICES_SUCCESS,
	payload: services,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const createServicesFailure = errorMessage => ({
	type: ServicesDetailActionTypes.CREATE_SERVICES_FAILURE,
	payload: errorMessage,
});
