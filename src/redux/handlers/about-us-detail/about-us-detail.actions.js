import AboutUsDetailTypes from './about-us-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const createAboutUsStart = () => ({
	type: AboutUsDetailTypes.CREATE_ABOUT_US_START,
});

export const fetchAboutUsStart = () => ({
	type: AboutUsDetailTypes.FETCH_ABOUT_US_START,
});

export const setAboutUsStart = (inputName, value) => ({
	type: AboutUsDetailTypes.SET_ABOUT_US,
	payload: { inputName, value },
});

export const toggleEditStart = () => ({
	type: AboutUsDetailTypes.EDIT_ABOUT_US,
});

export const clearAboutUs = () => ({
	type: AboutUsDetailTypes.CLEAR_ABOUT_US,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const createAboutUsSuccess = () => ({
	type: AboutUsDetailTypes.CREATE_ABOUT_US_SUCCESS,
});

export const fetchAboutUsSuccess = aboutUsSection => ({
	type: AboutUsDetailTypes.FETCH_ABOUT_US_SUCCESS,
	payload: aboutUsSection,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const createAboutUsFailure = errorMessage => ({
	type: AboutUsDetailTypes.CREATE_ABOUT_US_FAILURE,
	payload: errorMessage,
});

export const fetchAboutUsFailure = errorMessage => ({
	type: AboutUsDetailTypes.FETCH_ABOUT_US_FAILURE,
	payload: errorMessage,
});
