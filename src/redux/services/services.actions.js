import ServicesActionTypes from './services.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchServicesCollectionStart = () => ({
	type: ServicesActionTypes.FETCH_SERVICES_COLLECTION_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchServicesCollectionSuccess = services => ({
	type: ServicesActionTypes.FETCH_SERVICES_COLLECTION_SUCCESS,
	payload: services,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchServicesCollectionFailure = errorMessage => ({
	type: ServicesActionTypes.FETCH_SERVICES_COLLECTION_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove	       	                                        */
/* ================================================================ */

export const removeServicesCollectionListener = () => ({
	type: ServicesActionTypes.REMOVE_SERVICES_COLLECTION_LISTENER,
});
