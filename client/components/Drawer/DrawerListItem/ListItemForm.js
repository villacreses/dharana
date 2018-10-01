import {createNewProject} from '../../../store'
import ItemForm from '../../ItemForm'

const PROJECTS = 'projects'
const updateProjectThunk = () => console.log('Updated!')

export const EditProjectForm = ItemForm(updateProjectThunk, PROJECTS)
export const AddProjectForm = ItemForm(createNewProject, PROJECTS)
