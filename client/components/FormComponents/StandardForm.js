import React from 'react'
import Form from './Form'
import InputGroup from './InputGroup'
import Input from './Input'
import ButtonRow from './ButtonRow'
import SubmitButton from './SubmitButton'
import CancelButton from './CancelButton'

export default function () {
  return (
    <Form onSubmit={this.handleSubmit}>
      <InputGroup>
        <Input
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
        />
      </InputGroup>
      <ButtonRow>
        <SubmitButton />
        <CancelButton onClick={this.props.closeForm} />
      </ButtonRow>
    </Form>
  )
}

export function StandardFormAbbr () {
  return (
    <Form onSubmit={this.handleSubmit}>
      <InputGroup>
        <Input
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
        />
      </InputGroup>
    </Form>
  )
}
