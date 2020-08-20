import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import store from 'store'
import loginActions from '../../action/user/login'

 function LoginPage (props) {
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }
  let login = () => {
    props.changeLoginStatus()
    store.set('token','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpc3MiOiI2dDZQUmlaaFdXN2dyVTdsS01yZXNKazB3VDVtR1k4ciIsIm5iZiI6MTQ0NDQ3ODQwMH0.yv-JBU1Ru_RKGRLDpZZSrSB-N_bvFo73aIe2Sb5R8fk')
    console.log(history)
    history.replace('/operation/branch')
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}
export default connect(state=>state,loginActions)(LoginPage)