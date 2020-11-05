import RequestMain from '../../request'
import { API_LIST } from '../../constants/api'
export default function loginActions (dispatch) {
  let requestMain=new RequestMain(dispatch)
  return {
    getAuth: async () => {
      let res = await requestMain.request({ url: API_LIST, memberId: 151487 })
      dispatch({
        type: 'SAVE_AUTH',
        authList: res
      })
    },
    changeLoginStatus: () => {
      dispatch({
        type: 'TO_LOGIN',
        status: 1
      })
    }
  }
}
