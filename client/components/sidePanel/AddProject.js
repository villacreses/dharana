import React from 'react';
import SideForm from './SideForm';

export default class AddProject extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showForm: false,
    }

    this.toggleOn =  this.toggleOn.bind(this);
    this.toggleOff =  this.toggleOff.bind(this);
  }

  toggleOn () {
    this.setState({showForm: true});
  }

  toggleOff() {
    this.setState({showForm: false})
  }
  render () {
    return (
      <React.Fragment>
        {this.state.showForm ? (
          <SideForm cancel={this.toggleOff} />
        ) : (
          <a href="#" onClick={this.toggleOn}>Add Project</a>
        )}
      </React.Fragment>
    )
  }
};
