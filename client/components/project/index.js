import React from 'react';
import ProjectBoard from './ProjectBoard';

export default class ProjectWrapper extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      projectId: this.props.location.hash.slice(1),
    }
  }

  render () {
    return <ProjectBoard id={this.state.projectId} />
  }
}

const mapDispatchToProps = dispatch => ({
  openProject: id => dispatch(selectProject(id))
})
