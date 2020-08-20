import React from 'react'
import { connect } from 'react-redux'
import './App.less'
import MenuComp from './menu'
import { Layout, Breadcrumb } from 'antd'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import LoginPage from './pages/login'
import RouterWrapper from './router'
import CustomTabs from './tabs'
import { BREAD_LIST } from './router/config'

const { Header, Content, Footer, Sider } = Layout
function PrivateRoute ({ children, loginStatus, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (loginStatus === 0) {
          return (
            <div>
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location.pathname }
                }}
              ></Redirect>
              <Route path='/login' component={LoginPage}></Route>
            </div>
          )
        } else {
          return children
        }
      }}
    />
  )
}
class AppRouter extends React.Component {
  state = {
    collapsed: false,
    paneList: []
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }
  getMenuItem = menuList => {
    this.setState({
      paneList: menuList
    })
  }
  render () {
    const { history, loginStatus } = this.props
    const pathname = history.location.pathname
    // if (loginStatus === 0) {
    //   return <Route path='/login' component={LoginPage}></Route>
    // }
    return (
      <PrivateRoute loginStatus={loginStatus}>
        <div className='App'>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className='logo' />
              <MenuComp history={history} getMenuItem={this.getMenuItem} />
            </Sider>
            <Layout className='site-layout'>
              <Header className='site-layout-background'>
                老吕管油，企业用油一站式管理平台
              </Header>
              <Content className='content-box'>
                <Breadcrumb className='bread-box'>
                  {BREAD_LIST[pathname] &&
                    BREAD_LIST[pathname].map((bread, index) => {
                      return (
                        <Breadcrumb.Item key={index}>{bread}</Breadcrumb.Item>
                      )
                    })}
                </Breadcrumb>
                <div className='site-layout-background'>
                  <CustomTabs
                    paneList={this.state.paneList}
                    history={history}
                    pathname={pathname}
                  />
                  <div className='mt10'>
                    <RouterWrapper />
                  </div>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </div>
      </PrivateRoute>
    )
  }
}
export default connect(state => state.loginReducer)(withRouter(AppRouter))
