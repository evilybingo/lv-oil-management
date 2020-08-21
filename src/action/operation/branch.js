import request from '../../request'
import { API_LIST } from '../../constants/api'
export default function branchActions (dispatch) {
  return {
    getBranchList: async function () {
      let res = await request({ url: API_LIST, memberId: 151487 }, dispatch)
      dispatch({
        type: 'INCREMENT',
        payload: res
      })
    }
  }
}
