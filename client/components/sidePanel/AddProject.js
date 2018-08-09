import React from 'react';
import {connect} from 'react-redux';
import {createNewProject} from '../../store';
import SideForm from './SideForm';

class AddProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false,
      title: '',
    }

    this.toggleOn = this.toggleOn.bind(this)
    this.toggleOff = this.toggleOff.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleOn() {
    this.setState({showForm: true, title: ''})
  }

  toggleOff() {
    this.setState({showForm: false})
  }

  handleInput (evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const {title} = this.state;
    if (title.length) {
      this.toggleOff();
      this.props.postProject(title);
    }
    else console.log('Name cannot be blank')
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showForm ? (
          <SideForm
            btnText="Add Project"
            cancel={this.toggleOff}
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
          />
        ) : (
          <a href="#" onClick={this.toggleOn}>
            Add Project
          </a>
        )}
      </React.Fragment>
    )
  }
}

const mapDispatch = dispatch => ({
  postProject: title => dispatch(createNewProject(title)),
});

export default connect(null, mapDispatch)(AddProject);
