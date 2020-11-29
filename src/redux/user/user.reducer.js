import UserTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	isFetching: false,
	errorMessage: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
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
