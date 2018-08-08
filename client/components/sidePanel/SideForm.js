import React from 'react'
import Input from '@material-ui/core/Input'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const SideForm = ({btnText, handleSubmit, cancel}) => {
  return (
    <React.Fragment>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Input id="project-input" placeholder="Name your project" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Input type="submit" value={btnText} onClick={handleSubmit} />
              <a href="#" onClick={cancel}>
                Cancel
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  )
};

export default SideForm;
