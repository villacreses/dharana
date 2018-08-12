import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import AddProject from './AddProject'
import {fetchProjects} from '../../store'
import history from '../../history'

class ProjectList extends React.Component {
  constructor(props) {
    super(props)

    const {path, hash} = this.props;
    const selected = (path === '/d/project' ? hash.slice(1) : path.slice(3));
    console.log(selected)

    this.state = {
      selected,
    }

    this.openProject = this.openProject.bind(this)
  }
  
  openProject(id) {
    return () => {
      history.push(`/d/project#${id}`)
      this.setState({selected: id})
    }
  }

  render() {
    const {projects, classes} = this.props;
    const boldText = id => (id == this.state.selected ? 'bold' : '');

    return (
      <List>
        {projects.map(project => (
          <li key={project.id} className={`flex flex-row drawer-item ${boldText(project.id)}`} >
            <span onClick={this.openProject(project.id)}>{project.title}</span>
          </li>
        ))}
        <AddProject />
      </List>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  projects: Object.values(state.projects)
})

export default connect(mapStateToProps)(ProjectList)
