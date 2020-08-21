import request from '../../request'
import { API_LIST } from '../../constants/api'
export default function loginActions (dispatch) {
  return {
    getAuth: async () => {
      let res = await request({ url: API_LIST, memberId: 151487 }, dispatch)
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
