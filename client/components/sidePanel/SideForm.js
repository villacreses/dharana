import React from 'react'
import Input from '@material-ui/core/Input'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const SideForm = ({btnText, handleInput, handleSubmit, cancel}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <input
                id="project-input"
                name="title"
                onChange={handleInput}
                placeholder="Name your project"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <input type="submit" value={btnText} />
              <a href="#" onClick={cancel}>
                Cancel
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </form>
  )
}

export default SideForm
