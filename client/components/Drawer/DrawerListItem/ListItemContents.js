import React from 'react'
import {connect} from 'react-redux'
import {Link, Route, withRouter} from 'react-router-dom'

const ListItemContents = props => {
  const bold = props.selected ? 'bold' : ''

  return (
    <table className="list-item full-width">
      <tbody>
        <tr className="d-flex flex-row">
          <td>
            <i className="fas fa-grip-vertical btn pr-1 text-secondary" />
          </td>
          <td className="d-flex flex-1">
            <Link
              to={`/d/project#${props.id}`}
              className="flex-1 text-dark a-no-style"
            >
              <span className={bold}>{props.title}</span>
            </Link>
          </td>
          <td>
            <i className="fas fa-ellipsis-v btn btn-sm text-secondary" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  title: state.projects[ownProps.id].title,
  selected: state.selected.projectId === ownProps.id
})

export default withRouter(connect(mapStateToProps)(ListItemContents))
