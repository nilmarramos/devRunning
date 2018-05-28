import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
	isAuthing: false,
	isAuth: false,
	isSigningIn: false,
	user: {},
	error: false,
	errorMessage: ''
}

export const signinRequest = (state = INITIAL_STATE, action) => {
	return {
		...state,
		isSigningIn: true,
		error: false,
		errorMessage: ''
	}
}

export const signinSuccess = (state = INITIAL_STATE, action) => {
	return {
		...state,
		isSigningIn: false,
		isAuth: true,
		user: action.user
	}
}

export const signinFailure = (state = INITIAL_STATE, action) => {
	return {
		...state,
		isSigningIn: false,
		error: true,
		errorMessage: action.error
	}
}

export const HANDLERS = {
	[Types.SIGNIN_REQUEST]: signinRequest,
	[Types.SIGNIN_SUCCESS]: signinSuccess,
	[Types.SIGNIN_FAILURE]:signinFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)