import request from '../../request'
import { API_LIST } from '../../constants/api'

export function getList (dispatch) {
  return request(API_LIST, {
    dispatch,
    cityName: '上海市',
    latitude: '31.40527',
    longitude: '121.48941',
    memberId: '23757',
    page: 1,
    pageSize: 50
  })
}
