import AboutUsDetailTypes from './about-us-detail.types';

const INITIAL_STATE = {
	id: '',
	title: '',
	body: '',
	isEdit: false,
};

const aboutUsDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case AboutUsDetailTypes.SET_ABOUT_US:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case AboutUsDetailTypes.EDIT_ABOUT_US:
			return {
				...state,
				isEdit: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case AboutUsDetailTypes.FETCH_ABOUT_US_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				title: action.payload.title,
				body: action.payload.body,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case AboutUsDetailTypes.FETCH_ABOUT_US_FAILURE:
		case AboutUsDetailTypes.UPDATE_ABOUT_US_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Clear Data                                              */
		/* ================================================================ */
		case AboutUsDetailTypes.CLEAR_ABOUT_US:
		case AboutUsDetailTypes.UPDATE_ABOUT_US_SUCCESS:
			return {
				...state,
				id: '',
				title: '',
				body: '',
				isEdit: false,
			};
		default:
			return state;
	}
};

export default aboutUsDetailReducer;
