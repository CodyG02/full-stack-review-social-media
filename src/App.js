import React from 'react'
import AuthHeader from './Components/AuthHeader'
import Header from './Components/Header'
import routes from './routes'
import {connect} from 'react-redux'
import './App.css'

function App(props) {
  return (
    <div className="App">
      {props.isLoggedIn ? <Header/> : <AuthHeader />}
      {routes}
    </div>
  )
}
const mapStateToProps = state => state

export default connect(mapStateToProps,)(App)
