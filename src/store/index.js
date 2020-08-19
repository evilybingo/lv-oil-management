import { createStore, combineReducers, applyMiddleware } from 'redux'
import branchReducer from '../reducer/branch'
import loginReducer from '../reducer/login'
import thunkMiddleware from 'redux-thunk'
export default function configureStore () {
  const rootReducer = combineReducers({
    branchReducer,
    loginReducer,
  })
  return createStore(rootReducer, applyMiddleware(thunkMiddleware))
}
