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
		case HeaderDetailTypes.TOGGLE_EDIT:
			return {
				...state,
				isEdit: !state.isEdit,
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
		case HeaderDetailTypes.CREATE_SERVICES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default headerDetailReducer;
