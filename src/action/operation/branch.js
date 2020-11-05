import RequestMain from '../../request'
import { API_LIST } from '../../constants/api'
export default function branchActions (dispatch) {
  let requestMain=new RequestMain(dispatch)
  return {
    getBranchList: async function () {
      let res = await requestMain.request({ url: API_LIST, memberId: 151487 })
      dispatch({
        type: 'INCREMENT',
        payload: res
      })
    }
  }
}
