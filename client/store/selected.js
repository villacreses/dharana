const defaultState = {
  projectId: -1,
}

// ACTION TYPES 
const SELECT_PROJECT = 'SELECT_PROJECT'

// ACTION CREATORS
export const selectProject = projectId => ({type: SELECT_PROJECT, projectId})

export default function (state = defaultState, action) {
  switch (action.type) {
    case SELECT_PROJECT:
      return {
        ...state,
        projectId: Number(action.projectId),
      }
    default: 
      return state;
  }
}
