import React from 'react'
import {connect} from 'react-redux'
import {selectProject} from '../store'
import List, {AddList} from './List'

class Project extends React.Component {
  componentDidUpdate () {
    this.props.syncDrawer()
  }

  render() {
    const {lists} = this.props
    const parentId = {projectId: this.props.id}
    return (
      <div className="d-flex flex-column full-width full-height">
        {!this.props.id ? (
          <h1>Project not found</h1>
        ) : (
          <React.Fragment>
            <div>
              <h3>{this.props.title}</h3>
            </div>
            <div className="d-flex flex-row flex-1 ox-auto">
              {lists && lists.map(list => <List key={list.id} id={list.id} parentId={parentId}/>)}
              <div>
                <AddList parentId={parentId} />
              </div>
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
