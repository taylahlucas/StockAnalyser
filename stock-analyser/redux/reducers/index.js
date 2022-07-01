import { combineReducers } from 'redux'
import selectedCompanies from './company_reducer'

export default combineReducers({
  usersList: selectedCompanies
})