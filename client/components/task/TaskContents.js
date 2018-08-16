import React from 'react'

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
    <table className="d-flex flex-row border-bottom py-2 task-item">
      <tbody className="flex-1">
        <tr className="d-flex flex-row pl-1 pr-2">
          <td>
            <i class="fas fa-grip-vertical btn btn-sm pr-1 text-secondary" />
          </td>
          <td className="pr-2">
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
              {props.due && <span className="pl-2">{props.due}</span>}
            </CrossOut>
          </td>
          <td className="pl-2">
            <i className="fas fa-align-left btn btn-sm btn-outline-secondary" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TaskContents
