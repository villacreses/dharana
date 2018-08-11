import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {logout} from '../store'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
})

const Navbar = props => {
  const {classes, isLoggedIn, handleLogout} = props
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Dharana
          </Typography>
          {isLoggedIn ? (
            <React.Fragment>
              <Button color="inherit" href="/app">Home</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button color="inherit" href="/login">Login</Button>
              <Button color="inherit" href="/signup">Sign Up</Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isLoggedIn: !!state.user.id,
})

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
})

const StyledNavbar = withStyles(styles)(Navbar);
export default connect(mapStateToProps, mapDispatchToProps)(StyledNavbar);

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
