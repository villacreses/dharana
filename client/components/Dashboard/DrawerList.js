import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectProject} from '../../store'
import history from '../../history'

class ProjectList extends React.Component {
  constructor(props) {
    super(props)

    const {path, hash} = this.props
    const selected = path === '/d/project' ? hash.slice(1) : path.slice(3)

    this.state = {
      collapse: true
    }

    this.openProject = this.openProject.bind(this)
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  openProject(id) {
    return () => {
      history.push(`/d/project#${id}`)
      this.props.openProject(id)
    }
  }

  toggleCollapse() {
    this.setState(prevState => ({collapse: !prevState.collapse}))
  }

  render() {
    const {projects, selectedProjectId, classes} = this.props
    const boldText = id => (id == selectedProjectId ? 'bold' : '')

    return (
      <React.Fragment>
        <ul className="full-width">
          <li className="full-width bold border-bottom pb-2 h5">Projects</li>
          <li>
            <ul className="pl-3">
              {projects.map(project => (
                <li
                  key={project.id}
                  className="project py-2"
                  onClick={this.openProject(project.id)}
                >
                  <span className={`${boldText(project.id)}`}>
                    {project.title}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
