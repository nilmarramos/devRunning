import { combineReducers } from 'redux'

import auth from './auth'
import runs from './runs'

const rootRedudcer = combineReducers({
	auth,
	runs
})

export default rootRedudcer