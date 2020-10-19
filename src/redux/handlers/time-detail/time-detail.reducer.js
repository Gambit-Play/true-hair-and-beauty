import TimeDetailTypes from './time-detail.types';

const INITIAL_STATE = {
	maandag: '',
	dinsdag: '',
	woensdag: '',
	donderdag: '',
	vrijdag: '',
	zaterdag: '',
	zondag: '',
	isEdit: false,
};

const timeDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case TimeDetailTypes.SET_TIME:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case TimeDetailTypes.EDIT_TIME:
			return {
				...state,
				isEdit: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case TimeDetailTypes.FETCH_TIME_SUCCESS:
			return {
				...state,
				maandag: action.payload.maandag,
				dinsdag: action.payload.dinsdag,
				woensdag: action.payload.woensdag,
				donderdag: action.payload.donderdag,
				vrijdag: action.payload.vrijdag,
				zaterdag: action.payload.zaterdag,
				zondag: action.payload.zondag,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case TimeDetailTypes.FETCH_TIME_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Clear Data                                              */
		/* ================================================================ */
		case TimeDetailTypes.CLEAR_TIME:
			return {
				...state,
				maandag: '',
				dinsdag: '',
				woensdag: '',
				donderdag: '',
				vrijdag: '',
				zaterdag: '',
				zondag: '',
				isEdit: false,
			};
		default:
			return state;
	}
};

export default timeDetailReducer;
