import axios from 'axios'

// ACTION TYPES
const GET_TASKS = 'GET_TASKS'
const TOGGLE_TASK = 'TOGGLE_TASK'

// ACTION CREATORS
export const getTasks = tasks => ({type: GET_TASKS, tasks})
export const toggleTask = id => ({type: TOGGLE_TASK, id})

// THUNK CREATORS
export const getTasksThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/tasks')
    dispatch(getTasks(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const toggleTaskThunk = id => async dispatch => {
  try {
    const res = await axios.put(`/api/tasks/toggle/${id}`)
    dispatch(toggleTask(id))
  } catch (err) {
    console.error(err)
  }
}


export default function (tasks = {}, action) {
  switch (action.type) {
    case GET_TASKS:
      return action.tasks
    case TOGGLE_TASK:
      return {
        ...tasks,
        [action.id]: {
          ...tasks[action.id],
          checked: !tasks[action.id].checked
        }
      }
    default:
      return tasks
  }
}
