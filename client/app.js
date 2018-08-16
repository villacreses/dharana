import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchProjects, getTasksThunk} from './store'
import {Navbar} from './components'
import List from './components/List'
import Routes from './routes'

class App extends React.Component {
  componentDidMount () {
    this.props.initialLoad()
  }

  render () {
    return (
      <div className="full-height d-flex flex-column">
        <Navbar />
        <List />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  initialLoad: async () => {
    await dispatch(fetchProjects ())
    await dispatch(getTasksThunk ())
  }
})

export default withRouter(connect(null, mapDispatchToProps)(App));
