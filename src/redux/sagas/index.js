import { takeLatest, all } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import axios from "axios/index";
import jwtDecode from "jwt-decode";

function* login(action) {
	console.log('login', action)
	let token = localStorage.getItem('token')
	//if (!token) {
		const login = yield axios.post('http://localhost:3001/users/login', {
			email: action.email,
			passwd: action.passwd
		})
		// const {token} = login.data
		// localStorage.setItem('token', token)
	// }
	const decoded = jwtDecode(token)
	console.log(decoded)

	const user = yield  axios.get('http://localhost:3001/users/me', {
		headers: {
			Authorization: 'Bearer '+ token
		}
	})
	console.log(user)
}

export default function* rootSaga() {
	yield all([
		takeLatest(Types.SIGNIN_REQUEST, login)
	])
}