import UserTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	email: '',
	password: '',
	isFetching: false,
	errorMessage: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case UserTypes.SET_LOGIN_CREDENTIALS:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case UserTypes.LOG_OUT:
			return {
				...state,
				currentUser: null,
				email: '',
				password: '',
				isFetching: false,
				errorMessage: '',
			};
		case UserTypes.CLEAR_LOGIN_CREDENTIALS:
			return {
				...state,
				email: '',
				password: '',
				errorMessage: '',
				isFetching: false,
			};
		case UserTypes.EMAIL_SIGN_IN_START:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case UserTypes.EMAIL_SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				isFetching: false,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case UserTypes.EMAIL_SIGN_IN_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
				isFetching: false,
			};
		default:
			return state;
	}
};

export default userReducer;
