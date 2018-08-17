import ListItemContents from './ListItemContents'
import AddProjectLink from './AddProjectLink'
import {AddProjectForm, EditProjectForm} from './ListItemForm'
import FormSwapper from '../../FormSwapper'

export const AddProject = FormSwapper(AddProjectLink, AddProjectForm)
export default FormSwapper(ListItemContents, EditProjectForm)
