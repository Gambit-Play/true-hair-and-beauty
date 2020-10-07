import ContentActionTypes from './content.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchContentCollectionStart = () => ({
	type: ContentActionTypes.FETCH_CONTENT_COLLECTION_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchContentCollectionSuccess = content => ({
	type: ContentActionTypes.FETCH_CONTENT_COLLECTION_SUCCESS,
	payload: content,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchContentCollectionFailure = errorMessage => ({
	type: ContentActionTypes.FETCH_CONTENT_COLLECTION_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove	       	                                        */
/* ================================================================ */

export const removeContentCollectionListener = () => ({
	type: ContentActionTypes.REMOVE_CONTENT_COLLECTION_LISTENER,
});
