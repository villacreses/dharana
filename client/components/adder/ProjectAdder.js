import React from 'react'
import {connect} from 'react-redux'
import AdderWrapper from './AdderWrapper'
import {createNewProject} from '../../store'

const ProjectAdder = props => {
  return (
    <li className="li-adder-link">
      <a href="" className="green" onClick={props.handleClick}>
        Add Project
      </a>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  handleSubmit: title => dispatch(createNewProject(title)),
})

const WrappedProjectAdder = AdderWrapper(ProjectAdder);
export default connect(null, mapDispatchToProps)(WrappedProjectAdder);
