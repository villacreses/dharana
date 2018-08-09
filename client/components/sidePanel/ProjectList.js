import React from 'react'
import {connect} from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import AddProject from './AddProject'
import {fetchProjects} from '../../store'

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.loadProjects()
  }

  render() {
    const {projects, handleClick} = this.props
    return (
      <List>
        {projects.map(project => (
          <ListItem
            key={project.id}
            button
            onClick={handleClick(project.id)}
          >
            {project.title}
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
  projects: state.projects
})

// to do: replace console.log with a thunk for fetching lists associated with the selected project
const mapDispatchToProps = dispatch => ({
  loadProjects: () => dispatch(fetchProjects()),
  handleClick: id => () => console.log(id) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
