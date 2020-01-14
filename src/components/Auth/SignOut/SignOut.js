import React from 'react'
import { Button } from '../../../ui/Button'

export const SignOut = props => (
  <Button type='info' position='right' onClick={props.signOut}>Sign Out</Button>
)
