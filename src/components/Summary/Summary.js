import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Error } from '../../ui/Error'
import { Loading } from '../../ui/Loading'
import { summaryAction } from '../../store/actions/summaryAction'
import './Summary.css'

export class Summary extends PureComponent {
  UNSAFE_componentWillMount = () => {
    this.props.dispatch(summaryAction(this.props.id))
  }

  render() {
    const { error, id, loading, summary } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (summary[id]) {
      return (
        <div>
          <h1 className='titleSummary'>{summary[id].title}</h1>
          <p dangerouslySetInnerHTML={{ __html: summary[id].summary}} />
        </div>
      )
    } else {
      return null
    }
  }
}

Summary.propsType ={
  id: PropTypes.number.isRequired
}
