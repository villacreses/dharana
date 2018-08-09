import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import UserHome from './user-home'
import SidePanel from './sidePanel'

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
    width: drawerWidth,
    'overflow-y': 'scroll',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

function Dashboard(props) {
  const {classes} = props

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <SidePanel />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <UserHome />
      </main>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
