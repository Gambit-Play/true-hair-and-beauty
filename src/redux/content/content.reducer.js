import ContentTypes from './content.types';

const INITIAL_STATE = {
	currentContent: null,
	isFetching: true,
	errorMessage: '',
};

const contentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case ContentTypes.FETCH_CONTENT_COLLECTION_START:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case ContentTypes.FETCH_CONTENT_COLLECTION_SUCCESS:
			return {
				...state,
				currentContent: action.payload,
				isFetching: false,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case ContentTypes.FETCH_CONTENT_COLLECTION_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
				isFetching: false,
			};
		default:
			return state;
	}
};

export default contentReducer;
