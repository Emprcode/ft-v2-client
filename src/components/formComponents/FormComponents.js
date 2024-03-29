import React from 'react'
import { Form } from 'react-bootstrap'

export const FormComponents = ({label, forwardRef, ...rest}) => {
  return (
    <Form.Group className="mb-3" >
    <Form.Label>{label}</Form.Label>
    <Form.Control ref={forwardRef} { ...rest}/>
    
  </Form.Group>
  )
}
