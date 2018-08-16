import TaskContents from './TaskContents'
import AddTaskLink from './AddTaskLink'
import {AddTaskForm, EditTaskForm} from './TaskForm'
import FormSwapper from '../FormSwapper'

export const AddTask = FormSwapper(AddTaskLink, AddTaskForm)
export default FormSwapper(TaskContents, EditTaskForm)
