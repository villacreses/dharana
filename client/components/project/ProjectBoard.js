import React from 'react';
import {connect} from 'react-redux';

const ProjectBoard = props => {
  const {id} = props;
  const project = props.projects[id];
  return (
    <React.Fragment>
      {!project ? (
        <h1>Project not found</h1>
      ) : (
        <h1>{project.title}</h1>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  projects: state.projects,
})

export default connect(mapStateToProps)(ProjectBoard);
