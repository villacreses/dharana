import React from 'react';

const AdderForm = ({handleSubmit, handleInput, toggleOff}) => {
  return (
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
            <td className="pt-1">
              <input type="submit" className="btn btn-primary btn-sm" value="Add Project" />
              <a className="pl-2" onClick={toggleOff}>Cancel</a>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default AdderForm;
