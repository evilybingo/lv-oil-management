const loginInitState = {
  loginStatus: 1,
  authList:{}
}
function loginReducer (state = loginInitState, action) {
  switch (action.type) {
    case 'TO_LOGIN':
      return {
        ...state,
        loginStatus: action.status
      }
    case 'SAVE_AUTH':
      return {
        ...state,
        authList: action.authList
      }

    default:
      return state
  }
}
export default loginReducer
