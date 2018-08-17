import React from 'react'
import {connect} from 'react-redux'
import {selectProject} from '../store'
import List from './List'

class Project extends React.Component {
  componentDidUpdate () {
    this.props.syncDrawer()
  }

  render() {
    return (
      <div className="d-flex flex-column full-width full-height">
        {!this.props.id ? (
          <h1>Project not found</h1>
        ) : (
          <React.Fragment>
            <div>
              <h3>{this.props.title}</h3>
            </div>
            <div className="d-flex flex-row flex-1 pb-3">
              <List />
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.location.hash.slice(1)
  return {...state.projects[id]}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.location.hash.slice(1)
  return {
    syncDrawer: () => dispatch(selectProject(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
