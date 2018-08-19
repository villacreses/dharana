import ListItemContents from './ListItemContents'
import AddProjectLink from './AddProjectLink'
import {AddProjectForm, EditProjectForm} from './ListItemForm'
import {swapper} from '../../FormComponents'

export const AddProject = swapper(AddProjectLink, AddProjectForm)
export default swapper(ListItemContents, EditProjectForm)
