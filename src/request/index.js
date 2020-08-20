import axios from 'axios'
import store from 'store'
import { message } from 'antd'
import { delay } from '../utils/common'
import { BASE_URL_LIST, CUR_ENV } from '../constants/api'
import appMain from '../index'
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

async function outLogin (msg) {
  message.error(msg)
  store.remove('token')
  window.location = '/login'
  
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
export default function request (url, { method = 'post', ...rest }) {
  return new Promise(resolve => {
    Axios.request({
      method,
      url,
      data: rest
    })
      .then(res => {
        if (res.data.err !== 0) {
          message.error(res.data.msg || '系统异常')
          return
        }

        resolve({ data: res.data, code: 200 })
      })
      .catch(error => {
        switch (error.response.status) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            resolve({ code: 401 })
            outLogin('未登录，请重新登录')
            break
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
          case 402:
            resolve({ code: 401 })
            outLogin('登录过期，请重新登录')

            break
          case 403:
            resolve({ code: 401 })
            outLogin('登录过期，请重新登录')
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
