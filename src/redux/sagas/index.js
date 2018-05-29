import { takeLatest, all, put } from 'redux-saga/effects'
import ActionCreators, { Types } from '../actionCreators'
import axios from "axios/index";
import jwtDecode from "jwt-decode";

function* login(action) {
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
function* auth() {
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

export default function* rootSaga() {
	yield all([
		takeLatest(Types.SIGNIN_REQUEST, login),
		takeLatest(Types.AUTH_REQUEST, auth),
		put(ActionCreators.authRequest())
	])
}