import { put } from 'redux-saga/effects'
import ActionCreators from "../actionCreators";
import axios from "axios/index";
import jwtDecode from "jwt-decode";

export function* login(action) {
	let token = localStorage.getItem('token')
	const login = yield axios.post('http://localhost:3001/users/login', {
		email: action.email,
		passwd: action.passwd
	})
	if (login.data.token) {
		const {token} = login.data
		localStorage.setItem('token', token)

		const user = jwtDecode(token)
		localStorage.setItem('user', user)
		yield put(ActionCreators.signinSuccess(user))
	}else {
		yield put(ActionCreators.signinFailure(login.data.message))
	}
}
export function* auth() {
	const token = localStorage.getItem('token')
	if (token) {
		try {
			const user = jwtDecode(token)
			yield put(ActionCreators.authSuccess(user))
		}catch (e) {
			yield put(ActionCreators.authFailure('invalid token'))
		}
	}else {
		yield put(ActionCreators.authFailure('no token'))
	}
}

export function* destroyAuth() {
	localStorage.removeItem('token')
	localStorage.removeItem('user')
	yield put(ActionCreators.destroyAuthSuccess())

}