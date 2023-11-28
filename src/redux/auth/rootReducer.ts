import { combineReducers } from 'redux'
import signReducer from './authSignup/signupReducer'
import photoReducer from './photoReducer'

const rootReducer = combineReducers({
	signup: signReducer,
	photoUser: photoReducer
})

export type rootReducer = ReturnType<typeof rootReducer>

export default rootReducer
