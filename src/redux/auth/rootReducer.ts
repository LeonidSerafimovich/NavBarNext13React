import { combineReducers } from 'redux'

import signReducer from './authSignup/signupReducer'

const rootReducer = combineReducers({
	//auth: authReducer,
	signup: signReducer
})

export type rootReducer = ReturnType<typeof rootReducer>

export default rootReducer
