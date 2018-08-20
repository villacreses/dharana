import axios from 'axios'
import {addListToProject} from './project'

// ACTION TYPES
const GET_LISTS = 'GET_LISTS'
const CREATE_NEW_LIST = 'CREATE_NEW_LIST'
const ADD_TASK_TO_LIST = 'ADD_TASK_TO_LIST'
const UPDATE_LIST = 'UPDATE_LIST'

// ACTION CREATORS
export const getLists = lists => ({type: GET_LISTS, lists})
export const createNewList = list => ({type: CREATE_NEW_LIST, list})
export const updateList =  list => ({type: UPDATE_LIST, list})
export const addTaskToList = task => ({
  type: ADD_TASK_TO_LIST,
  id: task.id,
  listId: task.listId
})

// THUNK CREATORS
export const getListsThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/lists')
    dispatch(getLists(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const createNewListThunk = listInfo => async dispatch => {
  try {
    if (!listInfo.projectId || !listInfo.title)
      throw new Error(
        'List does not have required info, please include a title and a projectId'
      )
    const res = await axios.post('/api/lists', listInfo)
    await dispatch(createNewList(res.data))

    const {id, projectId} = res.data
    dispatch(addListToProject({id, projectId}))
  } catch (err) {
    console.error(err)
  }
}

export const updateListThunk = (listId, updates) => async dispatch => {
  try {
    const res = await axios.put(`/api/lists/${listId}`, updates)
    dispatch(updateList(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function(lists = {}, action) {
  switch (action.type) {
    case GET_LISTS:
      return action.lists
    case CREATE_NEW_LIST:
      return {
        ...lists,
        [action.list.id]: {
          ...action.list,
          tasks: []
        }
      }
    case UPDATE_LIST: 
      return {
        ...lists,
        [action.list.id]: action.list
      }
    case ADD_TASK_TO_LIST:
      return {
        ...lists,
        [action.listId]: {
          ...lists[action.listId],
          tasks: [
            ...lists[action.listId].tasks,
            {id: action.id}
          ]
        }
      }
    default:
      return lists
  }
}
