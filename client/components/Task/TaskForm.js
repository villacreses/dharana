import {updateTaskThunk, createNewTaskThunk} from '../../store'
import ItemForm from '../ItemForm'

const TASKS = 'tasks'
export const EditTaskForm = ItemForm(updateTaskThunk, TASKS)
export const AddTaskForm = ItemForm(createNewTaskThunk, TASKS)
