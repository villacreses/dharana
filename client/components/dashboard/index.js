import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Project from '../project'
import ProjectList from './ProjectList'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectProject} from '../../store'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    'box-sizing': 'border-box',
    height: '100%',
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'fixed',
    display: 'flex'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: 0,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

class Dashboard extends React.Component {
  componentDidMount () {
    const id = this.props.location.hash.slice(1);
    this.props.openProject(id);
  }
  render () {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <ProjectList
            path={this.props.location.pathname}
            hash={this.props.location.hash}
          />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route path="/d/project" component={Project} />
        </main>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  openProject: id => dispatch(selectProject(id)),
})

const StyledDashboard = withStyles(styles)(Dashboard);
export default connect(null, mapDispatchToProps)(StyledDashboard);
