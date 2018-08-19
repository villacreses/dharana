import axios from 'axios'
import {addTaskToList} from './list'

// ACTION TYPES
const GET_TASKS = 'GET_TASKS'
const TOGGLE_TASK = 'TOGGLE_TASK'
const CREATE_NEW_TASK = 'CREATE_NEW_TASK'
const UPDATE_TASK = 'UPDATE_TASK'

// ACTION CREATORS
export const getTasks = tasks => ({type: GET_TASKS, tasks})
export const toggleTask = id => ({type: TOGGLE_TASK, id})
export const createNewTask = task => ({type: CREATE_NEW_TASK, task})
export const updateTask = task => ({type: UPDATE_TASK, task})

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

export const createNewTaskThunk = taskInfo => async dispatch => {
  try {
    const res = await axios.post('/api/tasks', taskInfo)
    await dispatch(createNewTask(res.data))
    dispatch(addTaskToList(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const updateTaskThunk = (taskId, updates) => async dispatch => {
  try {
    const res = await axios.put(`/api/tasks/${taskId}`, updates)
    dispatch(updateTask(res.data))
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
    case CREATE_NEW_TASK:
    case UPDATE_TASK:
      return {
        ...tasks,
        [action.task.id]: action.task
      }
    default:
      return tasks
  }
}
