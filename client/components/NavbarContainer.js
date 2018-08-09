import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Navbar from './navbar'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
});

const NavbarContainer = props => {
  const {classes} = props
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <Navbar flexClass={classes.flex} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavbarContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavbarContainer)
