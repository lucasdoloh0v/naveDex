import { NaversProvider } from 'context/navers'
import { Redirect, Route } from 'react-router-dom'

import { Home } from 'screens'

const AuthenticatedApp = () => {
  return (
    <NaversProvider>
      <Route exact path='/home' component={Home} />
      <Redirect to='/home' />
    </NaversProvider>
  )
}

export default AuthenticatedApp
