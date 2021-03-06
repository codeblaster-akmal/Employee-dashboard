import { combineReducers } from 'redux'
import employeeReducer from './employee/employeeReducer'

const rootReducer = combineReducers({
  employee: employeeReducer
})

export default rootReducer
