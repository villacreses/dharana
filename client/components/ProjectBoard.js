import React from 'react'
import {connect} from 'react-redux'
import List from './List'

const ProjectBoard = props => {
  const {project} = props
  const arr = [1, 2, 3, 4,]

  return (
    <div className="d-flex flex-column full-width full-height">
      {!project ? (
        <h1>Project not found</h1>
      ) : (
        <React.Fragment>
          <div id="board-header" className="p-2 mb-3">
            <h3>{project.title}</h3>
          </div>
          <div id="list-container" className="d-flex flex-row flex-1 pb-3">
            <List />
            <List />
            <List />
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  project: state.projects[state.selected.projectId]
})

export default connect(mapStateToProps)(ProjectBoard)
