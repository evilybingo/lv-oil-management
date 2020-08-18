import { createStore, combineReducers, applyMiddleware } from 'redux'
import { branchReducer } from '../reducer/branch'
import thunkMiddleware from 'redux-thunk'
export default function configureStore () {
  const rootReducer = combineReducers({
    branchReducer
  })
  return createStore(rootReducer, applyMiddleware(thunkMiddleware))
}
