const branchInitState = {
  count: 0,
  list: {}
}
export function branchReducer (state = branchInitState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        list: action.payload
      }

    default:
      return state
  }
}
