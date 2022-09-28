import { Redirect, Route } from 'react-router-dom'

import { Home } from 'screens'

const AuthenticatedApp = () => {
  return (
    <>
      <Route exact path='/home' component={Home} />
      <Redirect to='/home' />
    </>
  )
}

export default AuthenticatedApp
