import FooterDetailTypes from './footer-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const createFooterStart = () => ({
	type: FooterDetailTypes.CREATE_FOOTER_START,
});

export const fetchFooterStart = () => ({
	type: FooterDetailTypes.FETCH_FOOTER_START,
});

export const setFooterStart = (inputName, value) => ({
	type: FooterDetailTypes.SET_FOOTER,
	payload: { inputName, value },
});

export const toggleEditStart = () => ({
	type: FooterDetailTypes.EDIT_FOOTER,
});

export const clearFooter = () => ({
	type: FooterDetailTypes.CLEAR_FOOTER,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const createFooterSuccess = () => ({
	type: FooterDetailTypes.CREATE_FOOTER_SUCCESS,
});

export const fetchFooterSuccess = footerSection => ({
	type: FooterDetailTypes.FETCH_FOOTER_SUCCESS,
	payload: footerSection,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const createFooterFailure = errorMessage => ({
	type: FooterDetailTypes.CREATE_FOOTER_FAILURE,
	payload: errorMessage,
});

export const fetchFooterFailure = errorMessage => ({
	type: FooterDetailTypes.FETCH_FOOTER_FAILURE,
	payload: errorMessage,
});
