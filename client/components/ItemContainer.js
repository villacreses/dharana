import React from 'react'

const ItemContainer = ({children}) => {
  return (
    <table className="list-item full-width border-bottom">
      <tbody>
        <tr className="d-flex flex-row">
          <td>
            <i className="fas fa-grip-vertical btn pr-1 text-secondary" />
          </td>
          <td className="d-flex flex-1">
            {children}
          </td>
          <td>
            <i className="fas fa-ellipsis-v btn btn-sm text-secondary" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ItemContainer
