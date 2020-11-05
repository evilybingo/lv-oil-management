import branchActions from './operation/branch'
import loginActions from './user/login'

export default function actionList (name) {
  return (dispatch,getState) => {
      console.log(getState,0)
    let list = {
      branch: branchActions(dispatch),
      loginActions: loginActions(dispatch)
    }
    return list[name]
  }
}