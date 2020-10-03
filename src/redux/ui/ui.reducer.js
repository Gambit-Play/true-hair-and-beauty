import UiTypes from './ui.types';

const INITIAL_STATE = {
	isModalOpen: false,
};

const uiReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case UiTypes.TOGGLE_MODAL:
			return {
				...state,
				isModalOpen: !state.isModalOpen,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */

		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */

		default:
			return state;
	}
};

export default uiReducer;
