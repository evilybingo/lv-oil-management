import { getList } from '../services/operation/list'
import store from 'store'
export default async function getAuthCode (storeReducer, history) {
  function toLogin () {
    history.replace('/login')
    storeReducer.dispatch({
      type: 'TO_LOGIN',
      status: 0
    })
  }
  let token = store.get('token')
  if (!token) {
    toLogin()
    return
  }
  let {data, code } = await getList() //权限接口，菜单接口
  if (code === 401) {
    toLogin()
    return
  }else if(data){
    storeReducer.dispatch({
      type: 'SAVE_AUTH',
      authList: data
    })
  }
}
