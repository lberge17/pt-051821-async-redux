import React, { Component } from 'react'
import PlanetsForm from './PlanetsForm'

export default class Planets extends Component {
  render() {
    return (
      <div>
      <h1>Planets</h1>
      <PlanetsForm />
      <ul>
        <li>planets go here</li>
      </ul>
    </div>
    )
  }
}
