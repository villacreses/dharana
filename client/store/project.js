import axios from 'axios';
import history from '../history';

// Action types
const GET_PROJECTS = 'GET_PROJECTS';
const POST_NEW_PROJECT = 'POST_NEW_PROJECT';

// Action creators
export const getProjects = projects => ({type: GET_PROJECTS, projects});
export const postNewProject = project => ({type: POST_NEW_PROJECT, project});

// THUNK CREATORS
export const fetchProjects = () => async dispatch => {
  try {
    const res = await axios.get('/api/projects');
    dispatch(getProjects(res.data || []));
  } catch (err) {
    console.error(err);
  }
}

export const createNewProject = title => async dispatch => {
  try {
    const res = await axios.post('/api/projects', {title});
    dispatch(postNewProject(res.data))
    history.push(`/d/project#${res.data.id}`)
  } catch (err) {
    console.error(err);
  }
}

// REDUCER
export default function (projects = {}, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects;
    case POST_NEW_PROJECT:
      return {
        ...projects, 
        [action.project.id]: action.project,
      };
    default:
      return projects;
  }
}
