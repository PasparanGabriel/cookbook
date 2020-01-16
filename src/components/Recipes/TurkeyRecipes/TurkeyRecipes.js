import React, { PureComponent } from 'react'
import { Category } from '../../Category'
import { Error } from '../../../ui/Error'
import { Loading } from '../../../ui/Loading'
import { ViewDetails } from '../../ViewDetails'

export class TurkeyRecipes extends PureComponent {
  state = {
    id: 0,
    show: false
  }

  openModal = id => {
    this.setState({
      id: id,
      show: !this.state.show
    })
  }

  render() {
    const { baseUri, error, loading, turkeyRecipes } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (turkeyRecipes) {
      return (
        <div>
          <Category baseUri={baseUri} category={turkeyRecipes} openModal={this.openModal} title='Turkey' />
          <ViewDetails close={this.openModal} id={this.state.id} show={this.state.show} />
        </div>
      )  
    } else {
      return null
    }
  }
}
