import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'
import DrawerList from './DrawerList'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProjects, getTasksThunk, selectProject} from '../../store'
import List from '../List'

class Dashboard extends React.Component {
  componentDidMount () {
    this.props.initialLoad();
  }

  render () {
    return (
      <div className="container-fluid d-flex flex-1 pl-0 hide-overflow">
          <nav className="nav drawer shadow pt-2 px-3">
            <DrawerList
              path={this.props.location.pathname}
              hash={this.props.location.hash}
            />
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
  openProject: id => dispatch(selectProject(id)),
})

export default connect(null, mapDispatchToProps)(Dashboard);
