import React, { Component } from 'react'

import { MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { list } from './config'
import store from 'store'
import {
  ROUTE_MENU_LIST,
  OPENKEY_LIST,
  ROOT_SUB_MENU_KEY
} from '../../router/config'
const { SubMenu } = Menu

class CustomMenu extends Component {
  constructor (props) {
    super(props)

    const { location } = props.history
    let curOpenKey = store.get('curOpenKey')
    this.state = {
      openKeys: curOpenKey || ['1'],
      defaultSelectedKeys: OPENKEY_LIST[location.pathname] || []
    }
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (ROOT_SUB_MENU_KEY.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  changeMenu = openKeys => {
    store.set('curOpenKey', this.state.openKeys)

    let paneList = ROUTE_MENU_LIST[openKeys.id]
    if (!paneList) {
      return
    }
    let menuList = store.get('choosedMenuList') || []
    const haved = menuList.some(menu => menu.url === paneList.url)
    if (!haved) {
      menuList.push(paneList)
      store.set('choosedMenuList', menuList)
    }

    this.props.getMenuItem(menuList)
    this.props.history.replace({
      pathname: ROUTE_MENU_LIST[openKeys.id].url,
      state: {
        curOpenKey: this.state.openKeys
      }
    })
  }

  menuMap (list) {
    return list.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.id}
            title={
              <span>
                <MailOutlined />
                <span>{item.name}</span>
              </span>
            }
          >
            {this.menuMap(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.id} onClick={this.changeMenu.bind(this, item)}>
            {item.name}
          </Menu.Item>
        )
      }
    })
  }
  render () {
    const { defaultSelectedKeys } = this.state
    return (
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={defaultSelectedKeys}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
      >
        {this.menuMap(list)}
        {/* <SubMenu key='sub2' icon={<AppstoreOutlined />} title='运营中心'>
          <Menu.Item key='5'>下属机构</Menu.Item>
          <Menu.Item key='6'>司机油卡</Menu.Item>
          <SubMenu key='sub3' title='供应商管理'>
            <Menu.Item key='7'>油品供应商</Menu.Item>
            <Menu.Item key='8'>Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub4' icon={<SettingOutlined />} title='Navigation Three'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu> */}
      </Menu>
    )
  }
}

export default CustomMenu
