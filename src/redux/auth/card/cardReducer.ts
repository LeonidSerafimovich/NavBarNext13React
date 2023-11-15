const initialState = {
	cards: []
}

const cardReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'ADD_CARD':
			return {
				...state,
				cards: [...state.cards, action.payload]
			}
		default:
			return state
	}
}

export default cardReducer
