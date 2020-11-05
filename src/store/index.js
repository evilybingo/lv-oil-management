import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import branchReducer from '../reducer/branch'
import loginReducer from '../reducer/login'
import thunkMiddleware from 'redux-thunk'

export default function configureStore () {
  const rootReducer = combineReducers({
    branchReducer,
    loginReducer
  })

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  )
  const store = createStore(rootReducer, enhancer)
 
  //const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

  return store
}
