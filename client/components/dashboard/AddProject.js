import React from 'react';
import {connect} from 'react-redux';
import {createNewProject} from '../../store';

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

  toggleOn(evt) {
    (evt && evt.preventDefault());
    this.setState({showForm: true, title: ''})
  }

  toggleOff(evt) {
    (evt && evt.preventDefault());
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
        {this.state.showForm && (
          <li className="li-manager">
            <form onSubmit={this.handleSubmit}>
              <table className="span-width">
                <tbody>
                  <tr>
                    <td>
                      <input 
                        className="li-manager-input"
                        name="title"
                        onChange={this.handleInput}
                        placeholder="Name your project"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="submit" value="Add Project" />
                      <a href="" className="cancel" onClick={this.toggleOff}>Cancel</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </li>
        )}
        <li className="li-adder-link">
          <a href="" onClick={this.toggleOn}>
            Add Project
          </a>
        </li>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postProject: title => dispatch(createNewProject(title)),
});

export default connect(null, mapDispatchToProps)(AddProject);
