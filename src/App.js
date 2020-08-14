import React from 'react'

import './App.less'
import MenuComp from './menu'
import { Layout, Breadcrumb } from 'antd'
import { withRouter } from 'react-router'
import RouterWrapper from './router'
import { BREAD_LIST } from './router/config'

const { Header, Content, Footer, Sider } = Layout

class AppRouter extends React.Component {
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  render () {
    const { history } = this.props
    const pathname = history.location.pathname
    
    return (
      <div className='App'>
   
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className='logo' />
            <MenuComp history={history} />
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
                <RouterWrapper />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default withRouter(AppRouter)

