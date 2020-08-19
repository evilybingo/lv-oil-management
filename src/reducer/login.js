
const loginInitState = {
    loginStatus: -1
  }
function loginReducer (state = loginInitState, action,history ) {
    console.log(history )
  switch (action.type) {
    case 'TO_LOGIN':
        // if(action.status===0){
        //     window.location='/login'
        //    // createBrowserHistory().push("/login");
        // }
      return {
        ...state,
        loginStatus: action.status
      }

    default:
      return state
  }
}
export default loginReducer