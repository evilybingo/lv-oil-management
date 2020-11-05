import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './App'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'
//import * as serviceWorker from './serviceWorker'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from './store'
import getAuthCode from './store/auth'

;(async function (outLogin) {
  //await delay(10000)
  const customHistory = createBrowserHistory()
  const storeConfig = configureStore(customHistory)
  if (outLogin) {
    return { storeConfig, customHistory }
  }
  await getAuthCode(storeConfig, customHistory)
  const App = () => {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={storeConfig}>
          <Router history={customHistory}>
            <AppRouter/>
          </Router>
        </Provider>
      </ConfigProvider>
    )
  }
  ReactDOM.render(<App />, document.getElementById('root'))
})()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
