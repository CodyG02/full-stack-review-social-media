import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from './Components/Landing'
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import Profile from './Components/Profile'

export default 
<Switch>
 <Route exact path='/' component={Landing}/>
 <Route path='/register' component={Register} />
 <Route path='/dashboard' component={Dashboard}/>
 <Route path='/profile' component={Profile}/>
</Switch>