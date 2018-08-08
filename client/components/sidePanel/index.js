import React, {Fragment} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ProjectList from './ProjectList'

export default class SidePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showProjectForm: false
    }
    this.projectFormToggle = this.projectFormToggle.bind(this)
  }

  projectFormToggle(bool = null) {
    if (bool !== null) {
      return () => {
        this.setState({showProjectForm: !!bool})
      }
    } else {
      this.setState(prevState => ({
        showProjectForm: !prevState.showProjectForm
      }))
    }
  }

  render() {
    return (
      <React.Fragment>
        <ProjectList />
      </React.Fragment>
    )
  }
}
