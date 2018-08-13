import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

const ProjectBoard = props => {
  const {project} = props

  return (
    <React.Fragment>
      {!project ? (
        <h1>Project not found</h1>
      ) : (
        <div className="board-header flex-row">
          <Typography variant="headline" className="fg-1">
            {project.title}
          </Typography>
        </div>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  project: state.projects[state.selected.projectId]
})

export default connect(mapStateToProps)(ProjectBoard)
