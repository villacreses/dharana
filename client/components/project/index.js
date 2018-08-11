import React from 'react';
import ProjectBoard from './ProjectBoard';

export default class ProjectWrapper extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      projectId: this.props.location.hash.slice(1),
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const newProjectId = nextProps.location.hash.slice(1);
    const {projectId} = prevState;

    return (newProjectId !== projectId) ? {projectId: newProjectId} : null;
  }

  render () {
    return <ProjectBoard id={this.state.projectId} />
  }
}
