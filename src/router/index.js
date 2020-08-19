import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import loadable from '@loadable/component'
import NotFound from '../pages/404'
import { routerConfig } from './config'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import LoginPage from '../pages/login'

const AsyncPage = loadable(props => import(`../pages/${props.page}`), {
  ssr: false,
  fallback: <Spin />
})

function PrivateRoute ({ children, loginStatus, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(location,999)
        return loginStatus !== 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location.pathname }
            }}
          />
        )
      }}
    />
  )
}
class RouterWrapper extends React.Component {
  render () {
    const { loginStatus } = this.props
    console.log(loginStatus)
    // if (loginStatus === 0) {
    //   return (
    //     <Redirect push to='/login'>
    //       <Route path='/login' component={LoginPage}></Route>
    //     </Redirect>
    //   )
    // }
    return (
      <Switch>
        {routerConfig.map(routes => {
          return (
            <PrivateRoute
              loginStatus={loginStatus}
              key={routes.name}
              {...routes}
            >
              <AsyncPage page={routes.page} {...this.props} />
            </PrivateRoute>
          )
        })}

        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    )
  }
}
export default connect(state => state.loginReducer)(withRouter(RouterWrapper))
