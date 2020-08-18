import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './App'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn';
//import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
const storeConfig = configureStore()
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Provider store={storeConfig}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
