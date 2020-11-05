
import { createStore, } from 'redux'
const initState = { status: 1 }
function getStatus (state = initState, action) {
  if (action.type === 'CHANGE_LOGIN') {
    return { ...state, status: action.status }
  }
  return state
}
export const loginStore= createStore(getStatus)
 