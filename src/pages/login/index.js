import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import store from 'store'
import actionList from '../../action'

 function LoginPage (props) {
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }
  let login = () => {
    props.changeLoginStatus()
    store.set('token','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpc3MiOiJLZ2d4eHVNWnAzVWlrNHQ5VG5mOWNkcjY1RFQzSjQ3ZCIsIm5iZiI6MTQ0NDQ3ODQwMH0.i2PJBePskRoYnFcryFzBUXI1dO4vfXIUgCFilzzH05M')
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
export default connect(state=>state,actionList('loginActions'))(LoginPage)