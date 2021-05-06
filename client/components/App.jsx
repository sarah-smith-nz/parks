import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

import Homepage from './Homepage'
import Main from './Main'
import ParkDetails from './ParkDetails'

function App (props) {
  useEffect(() => { }, [])

  // const { isAuthenticated} = useAuth0()

  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route path='/main' component={Main} />
      <Route path='/park-details/:id' component={ParkDetails} />
    </>
  )
}

export default App
