import React, { Component } from 'react'

export default class PeopleForm extends Component {
  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({name: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder='name' 
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    )
  }
}
