import {combineReducers} from 'redux'
import counterReducer from './counter'
import filterReducer from './filter'
import articles from './articles'

export default combineReducers({
    counter: counterReducer,
    articles,
    filters: filterReducer
})