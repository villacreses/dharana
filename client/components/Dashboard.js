import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'
import Drawer from './Drawer'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProjects, getTasksThunk, selectProject} from '../store'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.initialLoad()
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-1 pl-0 hide-overflow">
        <nav className="nav drawer shadow pt-2 px-3">
          <Drawer />
        </nav>
        <main className="flex-1 hide-overflow pl-2">
          <Route path="/d/project" component={Project} />
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  initialLoad: async () => {
    await dispatch(fetchProjects())
    await dispatch(getTasksThunk())
  },
})

export default withRouter(connect(null, mapDispatchToProps)(Dashboard))
