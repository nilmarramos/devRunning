import { combineReducers } from 'redux'

import auth from './auth'

const rootRedudcer = combineReducers({
	auth
})

export default rootRedudcer