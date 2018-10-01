import axios from 'axios'
import history from '../history'
import {selectProject} from './selected'
import {createNewListThunk} from './list'

// Action types
const GET_PROJECTS = 'GET_PROJECTS'
const POST_NEW_PROJECT = 'POST_NEW_PROJECT'
const ADD_LIST_TO_PROJECT = 'ADD_LIST_TO_PROJECT'

// Action creators
export const getProjects = projects => ({type: GET_PROJECTS, projects})
export const postNewProject = project => ({type: POST_NEW_PROJECT, project})
export const addListToProject = ({id, projectId}) => ({
  type: ADD_LIST_TO_PROJECT,
  id,
  projectId
})

// THUNK CREATORS
export const fetchProjects = () => async dispatch => {
  try {
    const res = await axios.get('/api/projects')
    dispatch(getProjects(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const createNewProject = ({title}) => async dispatch => {
  try {
    const res = await axios.post('/api/projects', {title})
    await dispatch(postNewProject(res.data))
    await dispatch(
      createNewListThunk({title: 'list 1', projectId: res.data.id})
    )

    history.push(`/d/project#${res.data.id}`)
    dispatch(selectProject(res.data.id))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
export default function(projects = {}, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects
    case POST_NEW_PROJECT:
      return {
        ...projects,
        [action.project.id]: {
          ...action.project,
          lists: []
        }
      }
    case ADD_LIST_TO_PROJECT:
      return {
        ...projects,
        [action.projectId]: {
          ...projects[action.projectId],
          lists: [...projects[action.projectId].lists, {id: action.id}]
        }
      }
    default:
      return projects
  }
}
