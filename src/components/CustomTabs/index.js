import React, { Fragment } from 'react'
import { Tabs } from 'antd'
import store from 'store'
import { BREAD_LIST } from '../../router/config'
const { TabPane } = Tabs
export default class CustomTabs extends React.Component {
  newTabIndex = 0

  constructor (props) {
    super(props)
    console.log(props)
    let tit = BREAD_LIST[props.pathname]
    if (!tit) {
      this.state = {
        panes: []
      }
      return
    }
    tit = tit[tit.length - 1]
    let initialPanes = [{ url: props.pathname, title: tit }]
    let choosedMenuList = store.get('choosedMenuList')
    if (choosedMenuList && choosedMenuList.length) {
      initialPanes = choosedMenuList
    }
    if (initialPanes.length === 1) {
      initialPanes = [
        {
          ...initialPanes[0],
          closable: false
        }
      ]
    }
    this.state = {
      activeKey: props.pathname,
      panes: initialPanes
    }
  }

  onChange = activeKey => {
    this.setState({ activeKey, remove: true }, () => {
      this.props.history.replace(activeKey)
    })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  remove = targetKey => {
    const { panes, activeKey } = this.state
    let newActiveKey = activeKey
    let lastIndex
    panes.forEach((pane, i) => {
      if (pane.url === targetKey) {
        lastIndex = i - 1
      }
    })
    const newPanes = panes.filter(pane => pane.url !== targetKey)
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].url
      } else {
        newActiveKey = newPanes[0].url
      }
    }
    store.set('choosedMenuList', newPanes)
    this.setState(
      {
        panes: newPanes,
        activeKey: newActiveKey,
        remove: true
      },
      () => {
        if (newPanes.length) {
          this.props.history.replace(newPanes[newPanes.length - 1].url)
        }
      }
    )
  }
  componentWillReceiveProps (nextProps) {
    if (!this.state.remove) {
      this.setState({
        panes: nextProps.paneList,
        activeKey: nextProps.pathname
      })
    } else {
      this.setState({
        remove: false
      })
    }
  }
  render () {
    const { panes, activeKey } = this.state
    return (
      <Fragment>
        {panes.length > 0 && (
          <Tabs
            type='editable-card'
            onChange={this.onChange}
            hideAdd
            activeKey={activeKey}
            onEdit={this.onEdit}
          >
            {panes.map(pane => (
              <TabPane tab={pane.title} key={pane.url} closable={pane.closable}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        )}
      </Fragment>
    )
  }
}
