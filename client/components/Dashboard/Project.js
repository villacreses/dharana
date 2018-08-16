import React from 'react';
import {connect} from 'react-redux'
import {selectProject} from '../../store'
import List from '../List'

const Project = props => {
  return (
    <div className="d-flex flex-column full-width full-height">
      {!props.id ? (
        <h1>Project not found</h1>
      ) : (
        <React.Fragment>
          <div>
            <h3>{props.title}</h3>
          </div>
          <div className="d-flex flex-row flex-1 pb-3">
            <List />
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.location.hash.slice(1)
  return {...state.projects[id]}
}

export default connect(mapStateToProps)(Project)
