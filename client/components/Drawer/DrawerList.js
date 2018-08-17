import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectProject} from '../../store'
import history from '../../history'
import DrawerListItem from './DrawerListItem'

class DrawerList extends React.Component {
  render() {
    const {projects} = this.props
    return (
      <ul className="full-width">
        <li className="full-width bold border-bottom pb-2 h5">Projects</li>
        <li>
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <DrawerListItem id={project.id} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  projects: Object.values(state.projects),
  selectedProjectId: state.selected.projectId
})

const mapDispatchToProps = dispatch => ({
  openProject: id => dispatch(selectProject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerList)
