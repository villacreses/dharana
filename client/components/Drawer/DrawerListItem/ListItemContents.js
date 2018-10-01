import React from 'react'
import {connect} from 'react-redux'
import {Link, Route, withRouter} from 'react-router-dom'
import ItemContainer from '../../ItemContainer'

const ListItemContents = ({selected, title, id}) => {
  const bold = selected ? 'bold' : ''

  return (
    <ItemContainer>
      <Link
        to={`/d/project#${id}`}
        className="flex-1 text-dark a-no-style"
      >
        <span className={bold}>{title}</span>
      </Link>
    </ItemContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  title: state.projects[ownProps.id].title,
  selected: state.selected.projectId === ownProps.id
})

export default withRouter(connect(mapStateToProps)(ListItemContents))
