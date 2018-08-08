import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import SideForm from './SideForm';

export default class ProjectLi extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleForm () {
    this.setState(prevState => ({visible: !prevState.visible}));
  }

  handleSubmit () {
    console.log('Submitted!')
  }

  render () {
    const {name} = this.props;
    return (
      <React.Fragment>
        {this.state.showForm ? (
          <SideForm 
            btnText="Save"
            cancel={this.toggleForm}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          {name}
        )}
      </React.Fragment>
    )
  }
}
