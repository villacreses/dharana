import HeadingContents from './HeadingContents'
import AddListContents from './AddListContents'
import {EditHeadingForm, AddListForm} from './HeadingForm'
import {swapper} from '../../FormComponents'

export default swapper(HeadingContents, EditHeadingForm)
export const AddList = swapper(AddListContents, AddListForm)
