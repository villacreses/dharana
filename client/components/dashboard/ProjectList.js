import React from 'react'
import {connect} from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import AddProject from './AddProject'
import {fetchProjects} from '../../store'
import {Link} from 'react-router-dom'

class ProjectList extends React.Component {

  render() {
    const {projects, handleClick} = this.props
    return (
      <List>
        {projects.map(project => (
          <ListItem
            key={project.id}
          >
            <Link to={`/d/project#${project.id}`}>{project.title}</Link>
        </ListItem>
      ))}
      <li>
        <AddProject />
      </li>
    </List>
  )
}
}

const mapStateToProps = state => ({
projects: Object.values(state.projects),
})


export default connect(mapStateToProps)(ProjectList)
