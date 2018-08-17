import React from 'react'
import DrawerList from './DrawerList'
import {AddProject} from './DrawerListItem'

const Drawer = props => {
  return (
    <div className="full-width">
      <DrawerList location={props.location} />
      <AddProject />
    </div>
  )
}

export default Drawer
