import { combineReducers } from 'redux'
import workerReducer from './workers'
import skillReducer from './skills'
import portfolioReducer from './portfolio'

export default combineReducers({
    workerReducer,
    skillReducer,
    portfolioReducer
})