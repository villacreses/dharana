import axios from 'axios'
import {addListToProject} from './project'

// ACTION TYPES
const GET_LISTS = 'GET_LISTS'
const CREATE_NEW_LIST = 'CREATE_NEW_LIST'

// ACTION CREATORS
export const getLists = lists => ({type: GET_LISTS, lists})
export const createNewList = list => ({type: CREATE_NEW_LIST, list})

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

export default function(lists = {}, action) {
  switch (action.type) {
    case GET_LISTS:
      return action.lists
    case CREATE_NEW_LIST:
      return {
        ...lists,
        [action.list.id]: action.list
      }
    default:
      return lists
  }
}
