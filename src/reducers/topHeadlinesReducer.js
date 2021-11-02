export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_TOP_HEADLINES': 
			return action.payload;
		default:
			return state;
	}
};