import branchActions from './operation/branch'

export default function actionList (name) {
  return (dispatch,getState) => {
      console.log(getState,0)
    let list = {
      branch: branchActions(dispatch)
    }
    return list[name]
  }
}
