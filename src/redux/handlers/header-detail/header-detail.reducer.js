import HeaderDetailTypes from './header-detail.types';

const INITIAL_STATE = {
	id: '',
	bottomText: '',
	topText: '',
	isEdit: false,
};

const headerDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case HeaderDetailTypes.SET_HEADER:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case HeaderDetailTypes.EDIT_HEADER:
			return {
				...state,
				isEdit: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case HeaderDetailTypes.FETCH_HEADER_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				bottomText: action.payload.bottomText,
				topText: action.payload.topText,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case HeaderDetailTypes.FETCH_HEADER_FAILURE:
		case HeaderDetailTypes.UPDATE_HEADER_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Clear Data                                              */
		/* ================================================================ */
		case HeaderDetailTypes.UPDATE_HEADER_SUCCESS:
		case HeaderDetailTypes.CLEAR_HEADER:
			return {
				...state,
				id: '',
				bottomText: '',
				topText: '',
				isEdit: false,
			};
		default:
			return state;
	}
};

export default headerDetailReducer;
