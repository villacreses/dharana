import React from 'react'
import {connect} from 'react-redux'
import {StandardForm} from '../../FormSwapper'
import {createNewProject} from '../../../store'

const mapStateEdit = (state, ownProps) => {
  const {title} = state.projects[ownProps.id]
  return {title}
}

const mapDispatchEdit = (dispatch, ownProps) => ({
  ...ownProps,
  submitUpdates: updates => console.log('Updated!')
})

const mapDispatchAdd = dispatch => ({
  title: '',
  submitUpdates: updates => dispatch(createNewProject(updates.title))
})

export const EditProjectForm = connect(mapStateEdit, mapDispatchEdit)(StandardForm)
export const AddProjectForm = connect(null, mapDispatchAdd)(StandardForm)
