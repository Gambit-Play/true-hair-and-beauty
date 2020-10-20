import FooterDetailTypes from './footer-detail.types';

const INITIAL_STATE = {
	id: '',
	email: '',
	adres: '',
	tel: '',
	isEdit: false,
};

const footerDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case FooterDetailTypes.SET_FOOTER:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case FooterDetailTypes.EDIT_FOOTER:
			return {
				...state,
				isEdit: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case FooterDetailTypes.FETCH_FOOTER_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				email: action.payload.email,
				adres: action.payload.adres,
				tel: action.payload.tel,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case FooterDetailTypes.CREATE_FOOTER_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Clear Data                                              */
		/* ================================================================ */
		case FooterDetailTypes.CLEAR_FOOTER:
			return {
				...state,
				id: '',
				email: '',
				adres: '',
				tel: '',
				isEdit: false,
			};
		default:
			return state;
	}
};

export default footerDetailReducer;
