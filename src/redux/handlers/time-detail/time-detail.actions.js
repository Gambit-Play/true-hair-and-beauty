import TimeDetailTypes from './time-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchTimeStart = () => ({
	type: TimeDetailTypes.FETCH_TIME_START,
});

export const setTimeStart = (inputName, value) => ({
	type: TimeDetailTypes.SET_TIME,
	payload: { inputName, value },
});

export const toggleEditStart = () => ({
	type: TimeDetailTypes.EDIT_TIME,
});

export const clearTime = () => ({
	type: TimeDetailTypes.CLEAR_TIME,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchTimeSuccess = time => ({
	type: TimeDetailTypes.FETCH_TIME_SUCCESS,
	payload: time,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchTimeFailure = errorMessage => ({
	type: TimeDetailTypes.FETCH_TIME_FAILURE,
	payload: errorMessage,
});
