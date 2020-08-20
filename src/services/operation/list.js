import request from '../../request'
import { API_LIST } from '../../constants/api'

export function getList () {
  return request(API_LIST, {
    memberId: '151487'
  })
}
