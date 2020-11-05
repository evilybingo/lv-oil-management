import axios from 'axios'
import store from 'store'
import { message } from 'antd'

import { BASE_URL_LIST, CUR_ENV } from '../constants/api'
import { REQUEST_LOADING } from '../constants/namespace'

export const baseURL = BASE_URL_LIST[CUR_ENV]

var Axios = axios.create({
  baseURL,
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    version: store.get('versionZY') || '5.0.5',
    Authorization: store.get('token')
  }
})

async function outLogin (msg, dispatch) {
  message.error(msg)
  store.remove('token')
  dispatch({
    type: 'TO_LOGIN',
    status: 0
  })
}
Axios.interceptors.request.use(
  config => {
    let token = store.get('token')
    config.headers.Authorization = token
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error)
  }
)

/**
 *
 * @param {Object} params:{method,url,data}
 */

export default class RequestMain {
  constructor (dispatch) {
    this.dispatch = dispatch
  }
  request ({ url, dispatchType = REQUEST_LOADING, method = 'post', ...rest }) {
    this.dispatch({
      type: dispatchType,
      loading: true
    })
    return new Promise(resolve => {
      Axios.request({
        method,
        url,
        data: rest
      })
        .then(res => {
          this.dispatch({
            type: dispatchType,
            loading: false
          })
          if (res.data.err !== 0) {
            message.error(res.data.msg || '系统异常')
            return
          }

          resolve({ data: res.data, code: 200 })
        })
        .catch(error => {
          this.dispatch({
            type: dispatchType,
            loading: false
          })
          switch (error.response.status) {
            // 401: 未登录
            // 未登录则跳转登录页面，并携带当前页面的路径
            // 在登录成功后返回当前页面，这一步需要在登录页操作。
            case 401:
              resolve({ code: 401 })
              outLogin('未登录，请重新登录', this.dispatch)
              break
            // 403 token过期
            // 登录过期对用户进行提示
            // 清除本地token和清空vuex中token对象
            // 跳转登录页面
            case 402:
              resolve({ code: 401 })
              outLogin('登录过期，请重新登录', this.dispatch)

              break
            case 403:
              resolve({ code: 401 })
              outLogin('登录过期，请重新登录', this.dispatch)
              break

            // 404请求不存在
            case 404:
              message.error(error.response.config.url + ' 网络请求不存在')
              break

            case 502:
              message.error('请求超时')
              break
            // 其他错误，直接抛出错误提示
            default:
              message.error(error.response.data.message || '系统异常')
          }
        })
    })
  }
}
