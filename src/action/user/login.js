export default function loginActions (dispatch) {
 
  return {
    changeLoginStatus: () => {
      dispatch({
        type: 'TO_LOGIN',
        status: 1
      })
    }
  }
}
