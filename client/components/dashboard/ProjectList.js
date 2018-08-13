import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {withStyles} from '@material-ui/core/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import {selectProject} from '../../store'
import history from '../../history'
import MenuWrapper from '../MenuWrapper'
import AddProject from './AddProject'
import {ProjectAdder} from '../adder'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '4.5px',
    paddingRight: 0,
    paddingBottom: '4.5px',
    paddingLeft: '16px'
  },
  padding: {
    paddingTop: 0,
    paddingLeft: '12px'
  },
  dense: {
    paddingLeft: '5px',
    fontSize: '1em',
    fontWeight: 'bold'
  }
})

class ProjectList extends React.Component {
  constructor(props) {
    super(props)

    const {path, hash} = this.props
    const selected = path === '/d/project' ? hash.slice(1) : path.slice(3)

    this.state = {
      collapse: true
    }

    this.openProject = this.openProject.bind(this)
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  openProject(id) {
    return () => {
      history.push(`/d/project#${id}`)
      this.props.openProject(id)
    }
  }

  toggleCollapse() {
    this.setState(prevState => ({collapse: !prevState.collapse}))
  }

  render() {
    const {projects, selectedProjectId, classes} = this.props
    const boldText = id => (id == selectedProjectId ? 'bold' : '')

    return (
      <List className={classes.padding}>
        <ListItem disableGutters dense onClick={this.toggleCollapse}>
          {this.state.collapse ? <ExpandMore /> : <ExpandLess />}
          <ListItemText disableTypography className={classes.dense}>
            Projects
          </ListItemText>
        </ListItem>
        <Divider />
        <Collapse in={this.state.collapse} timeout="auto" unmountOnExit>
          <List className={classes.padding}>
            {projects.map(project => (
              <ListItem
                key={project.id}
                className={`drawer-item ${classes.root}`}
              >
                <ListItemText
                  onClick={this.openProject(project.id)}
                >
                  <div className={boldText(project.id)}>
                    {project.title}
                  </div>
                </ListItemText>
                <MenuWrapper />
              </ListItem>
            ))}
            <ProjectAdder />
          </List>
          <Divider />
        </Collapse>
      </List>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  projects: Object.values(state.projects),
  selectedProjectId: state.selected.projectId,
})

const mapDispatchToProps = dispatch => ({
  openProject: id => dispatch(selectProject(id)),
})

const StyledProjectList = withStyles(styles)(ProjectList)

export default connect(mapStateToProps, mapDispatchToProps)(StyledProjectList)
