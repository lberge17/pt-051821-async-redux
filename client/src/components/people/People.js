import React, { Component } from 'react'
import PeopleForm from './PeopleForm'

export default class People extends Component {
  render() {
    return (
      <div>
      <h1>People</h1>
      <PeopleForm />
      <ul>
        <li>people go here</li>
      </ul>
    </div>
    )
  }
}
