import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'

const Navbar = props => {
  const {isLoggedIn, handleLogout} = props
  return (
    <nav id="top-bar" className="navbar shadow-sm py-0">
      <div className="navbar-brand">
        Dharana
      </div>
      <div className="navbar-nav">
        {isLoggedIn ? (
          <React.Fragment>
            <Link className="navbar-text text-secondary" to="/d/project">Home</Link>
            <a href="" className="navbar-text text-secondary" onClick={handleLogout}>Logout</a>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link className="navbar-text text-secondary" to="/login">Login</Link>
            <Link className="navbar-text text-secondary" to="/signup">Sign Up</Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isLoggedIn: !!state.user.id,
})

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
