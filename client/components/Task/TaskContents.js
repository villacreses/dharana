import React from 'react'
import {connect} from 'react-redux'
import {toggleTaskThunk} from '../../store'

const TaskContents = props => {
  const checkedCSS = props.checked ? 'checked' : 'text-muted'

  const CrossOut = ({children}) =>
    props.checked ? (
      <del className="d-flex flex-1 text-muted">{children}</del>
    ) : (
      <div className="d-flex flex-1" onClick={props.openForm}>
        {children}
      </div>
    )

  return (
    <table className="d-flex flex-row py-2 task-item border-bottom">
      <tbody className="flex-1">
        <tr className="d-flex flex-row">
          <td className="px-2 pt-1">
            <div
              className="checkbox rounded-circle border border-secondary"
              onClick={props.toggleCheck}
            >
              <i className={`fas fa-check pt-1 ${checkedCSS}`} />
            </div>
          </td>
          <td className="d-flex flex-1 text-cursor">
            <CrossOut>
              <span>{props.title}</span>
              <i className="fas fa-pencil-alt btn btn-outline-secondary border-0" />
            </CrossOut>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.tasks[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCheck: () => dispatch(toggleTaskThunk(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContents)
