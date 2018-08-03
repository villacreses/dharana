import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Navbar = ({handleClick, isLoggedIn, flexClass}) => (
  <React.Fragment>
    <Typography variant="title" color="inherit" className={flexClass}>Dharana</Typography>
    {isLoggedIn ? (
      <React.Fragment>
        {/* The navbar will show these links after you log in */}
        <Button color="inherit" href="/app">Home</Button>
        <Button color="inherit" href="#" onClick={handleClick}>
          Logout
        </Button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        {/* The navbar will show these links before you log in */}
        <Button color="inherit" href="/login">Login</Button>
        <Button color="inherit" href="/signup">Sign Up</Button>
      </React.Fragment>
    )}
  </React.Fragment>
)

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
  return {
    isLoggedIn: !!state.user.id,
    flexClass: ownProps.flexClass
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
