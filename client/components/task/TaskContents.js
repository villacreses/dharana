import React from 'react'
import {connect} from 'react-redux'
import {toggleTaskThunk} from '../../store'

const TaskContents = props => {
  const checkedCSS = props.checked ? 'checked' : 'text-muted'

  const CrossOut = ({children}) =>
    props.checked ? (
      <del className="d-flex flex-1 text-muted">{children}</del>
    ) : (
      <div onClick={props.openForm} className="d-flex flex-1">
        {children}
      </div>
    )

  return (
    <table className="d-flex flex-row py-2 task-item">
      <tbody className="flex-1">
        <tr className="d-flex flex-row">
          <td>
            <i className="fas fa-grip-vertical btn pr-1 text-secondary" />
          </td>
          <td className="pr-2 pt-1">
            <div
              className="checkbox rounded-circle border border-secondary"
              onClick={props.toggleCheck}
            >
              <i className={`fas fa-check pt-1 ${checkedCSS}`} />
            </div>
          </td>
          <td className="d-flex flex-1 text-cursor">
            <CrossOut>
              <span className="flex-1">{props.title}</span>
            </CrossOut>
          </td>
          <td className="pl-1">
            <i className="fas fa-align-left btn btn-sm btn-outline-secondary" />
          </td>
          <td>
            <i className="fas fa-ellipsis-v btn btn-sm text-secondary"></i>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.tasks[ownProps.id],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCheck: () => dispatch(toggleTaskThunk(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContents)
