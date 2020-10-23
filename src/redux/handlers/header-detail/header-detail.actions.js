import HeaderDetailTypes from './header-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const updateHeaderStart = () => ({
	type: HeaderDetailTypes.UPDATE_HEADER_START,
});

export const fetchHeaderStart = () => ({
	type: HeaderDetailTypes.FETCH_HEADER_START,
});

export const setHeaderStart = (inputName, value) => ({
	type: HeaderDetailTypes.SET_HEADER,
	payload: { inputName, value },
});

export const toggleEditStart = () => ({
	type: HeaderDetailTypes.EDIT_HEADER,
});

export const clearHeader = () => ({
	type: HeaderDetailTypes.CLEAR_HEADER,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const updateHeaderSuccess = () => ({
	type: HeaderDetailTypes.UPDATE_HEADER_SUCCESS,
});

export const fetchHeaderSuccess = headerContent => ({
	type: HeaderDetailTypes.FETCH_HEADER_SUCCESS,
	payload: headerContent,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const updateHeaderFailure = errorMessage => ({
	type: HeaderDetailTypes.UPDATE_HEADER_FAILURE,
	payload: errorMessage,
});

export const fetchHeaderFailure = errorMessage => ({
	type: HeaderDetailTypes.FETCH_HEADER_FAILURE,
	payload: errorMessage,
});
