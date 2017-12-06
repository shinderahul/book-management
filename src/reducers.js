const mainReducer = (state = {}, action) => {
	switch (action.type) {
		case 'TEST_ACTION':
			return {
				...state,
				test: action.value
			}
		case 'RECEIVE_BOOKS':
			return {
				...state,
				books: action.books
			}
		default:
				return state;
	}
}

export default mainReducer;
