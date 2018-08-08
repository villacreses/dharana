import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ProjectLi from './ProjectLi';
import AddProject from './AddProject';

class ProjectList extends React.Component {

  componentDidMount () {
    this.props.loadProjects();
  }
  render () {
    const {projects} = this.props;
    return (
      <List>
        {projects.map(project => (
          <ListItem key={project.id}>
            {project.title}
          </ListItem>
        ))}
        <ListItem>
          <AddProject />
        </ListItem>
      </List>
    )
  }
}

const mapState = state => ({
  projects: state.projects,
})

const mapDispatch = dispatch => ({
  loadProjects: () => dispatch(fetchProjects()),
});

export default connect(mapState, mapDispatch)(ProjectList);
