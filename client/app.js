import React from 'react'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="full-height d-flex flex-column">
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
