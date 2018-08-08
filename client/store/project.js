import axios from 'axios';
import history from '../history';

// Action types
const GET_PROJECTS = 'GET_PROJECTS';


// Action creators
export const getProjects = projects => ({type: GET_PROJECTS, projects});

// THUNK CREATORS
export const fetchProjects = () => async dispatch => {
  try {
    const res = await axios.get('/api/projects');
    dispatch(getProjects(res.data || {}));
  } catch (err) {
    console.error(err);
  }
}

// REDUCER
export default function (projects = [], action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects;
    default:
      return projects;
  }
}
