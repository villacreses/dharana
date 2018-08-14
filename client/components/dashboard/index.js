import React from 'react'
import PropTypes from 'prop-types'
import Project from '../project'
import ProjectList from './ProjectList'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectProject} from '../../store'

class Dashboard extends React.Component {
  componentDidMount () {
    const id = this.props.location.hash.slice(1);
    this.props.openProject(id);
  }

  render () {

    return (
      <div className="container-fluid d-flex flex-1 pl-0">
          <nav className="nav drawer shadow pt-2 px-3 mr-3">
            <ProjectList
              path={this.props.location.pathname}
              hash={this.props.location.hash}
            />
          </nav>
          <main className="pl-2 pt-3 flex-1 hide-overflow">
            <Route path="/d/project" component={Project} />
          </main>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  openProject: id => dispatch(selectProject(id)),
})

export default connect(null, mapDispatchToProps)(Dashboard);
