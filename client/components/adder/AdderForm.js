import React from 'react';

const AdderForm = ({handleSubmit, handleInput, toggleOff}) => {
  return (
    <li className="li-manager">
      <form onSubmit={handleSubmit}>
        <table className="span-width">
          <tbody>
            <tr>
              <td>
                <input 
                  className="li-manager-input"
                  name="title"
                  onChange={handleInput}
                  placeholder="Name your project"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Add Project" />
                <a className="cancel" onClick={toggleOff}>Cancel</a>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </li>
  )
}

export default AdderForm;
