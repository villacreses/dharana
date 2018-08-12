import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchProjects} from './store'
import {Navbar} from './components'
import Routes from './routes'

class App extends React.Component {
  componentDidMount () {
    this.props.loadProjects()
  }

  render () {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadProjects: () => dispatch(fetchProjects()),
})

export default withRouter(connect(null, mapDispatchToProps)(App));
