import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

class SimpleMenu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      anchorEl: null,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick (event) {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose () {
    this.setState({anchorEl: null})
  }

  render() {
    const {anchorEl} = this.state

    return (
      <div>
        <div
          className="more-menu hide"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreHorizIcon />
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Edit Title</MenuItem>
          <MenuItem onClick={this.handleClose}>Delete Project</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
