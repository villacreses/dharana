import TaskContents from './TaskContents'
import AddTaskLink from './AddTaskLink'
import {AddTaskForm, EditTaskForm} from './TaskForm'
import {swapper} from '../FormComponents/'

export const AddTask = swapper(AddTaskLink, AddTaskForm)
export default swapper(TaskContents, EditTaskForm)
