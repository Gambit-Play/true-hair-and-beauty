import HeaderDetailTypes from './header-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const createHeaderStart = () => ({
	type: HeaderDetailTypes.CREATE_HEADER_START,
});

export const fetchHeaderStart = headerContent => ({
	type: HeaderDetailTypes.FETCH_HEADER_START,
	payload: headerContent,
});

export const setHeaderStart = (inputName, value) => ({
	type: HeaderDetailTypes.SET_HEADER,
	payload: { inputName, value },
});

export const toggleEditStart = () => ({
	type: HeaderDetailTypes.TOGGLE_EDIT,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const createHeaderSuccess = () => ({
	type: HeaderDetailTypes.CREATE_HEADER_SUCCESS,
});

export const fetchHeaderSuccess = (id, bottomText, topText) => ({
	type: HeaderDetailTypes.FETCH_HEADER_SUCCESS,
	payload: { id, bottomText, topText },
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const createHeaderFailure = errorMessage => ({
	type: HeaderDetailTypes.CREATE_HEADER_FAILURE,
	payload: errorMessage,
});

export const fetchHeaderFailure = errorMessage => ({
	type: HeaderDetailTypes.FETCH_HEADER_FAILURE,
	payload: errorMessage,
});
