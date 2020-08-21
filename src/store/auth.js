import store from 'store'
export default async function getAuthCode (storeReducer, history) {
  let token = store.get('token')
  if (!token) {
    history.replace('/login')
    storeReducer.dispatch({
      type: 'TO_LOGIN',
      status: 0
    })
  }
}
