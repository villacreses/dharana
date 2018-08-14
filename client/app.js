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
      <div className="full-height d-flex flex-column">
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
