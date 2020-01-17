import React from 'react'
import { Button } from '../../ui/Button'
import { CookingInstructions } from '../CookingInstructions'
import { Ingredients } from '../Ingredients'
import { Summary }from '../Summary'
import './ViewDetails.css'

export const ViewDetails = props => {
  const { show } = props

  const closeModal = () => {
    props.close && props.close()
  }

  return (
    show &&
    <div className='viewDetailsModal'>
      <div className='viewDetailsModalContent'>
        <div className='viewDetailsModalPadding'>
          <Button type='danger' position='right' onClick={closeModal}>X</Button>
          <Summary id={props.id} />
          <Ingredients id={props.id} />
          <CookingInstructions id={props.id} />
        </div>
      </div>
    </div>
  )
}
