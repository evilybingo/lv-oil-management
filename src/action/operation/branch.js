import { getList } from '../../services/operation/list'

export default function branchActions (dispatch) {
  return {
    getBranchList: async function () {
      let res = await getList()
      dispatch({
        type: 'INCREMENT',
        payload: res
      })
    }
  }
}
