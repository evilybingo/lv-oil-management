import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import loadable from '@loadable/component'
import { routerConfig } from './config'
import { withRouter } from 'react-router'
const AsyncPage = loadable(props => import(`../pages/${props.page}`), {
  ssr: false,
  fallback: <Spin />
})
 class RouterWrapper extends React.Component {
  render () {
    return (
      <Switch>
        {routerConfig.map(routes => {
          return (
            <Route key={routes.name} {...routes}>
              <AsyncPage page={routes.page} {...this.props}/>
            </Route>
          )
        })}
      </Switch>
    )
  }
}
export default withRouter(RouterWrapper)