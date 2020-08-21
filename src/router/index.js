import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import loadable from '@loadable/component'
import NotFound from '../pages/404'
import { routerConfig } from './config'
import loginActions from '../action/user/login'
import { withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux'

const AsyncPage = loadable(props => import(`../pages/${props.page}`), {
  ssr: false,
  fallback: <Spin />
})

class RouterWrapper extends React.Component {
  componentDidMount(){
    this.props.getAuth()
  }
  render () {
    return (
      <Switch>
        {routerConfig.map(routes => {
          return (
            <Route key={routes.name} {...routes}>
              <AsyncPage page={routes.page} {...this.props} />
            </Route>
          )
        })}
        <Redirect from='/login' to='/' />
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    )
  }
}
export default connect(state => state.loginReducer,loginActions)(withRouter(RouterWrapper))
