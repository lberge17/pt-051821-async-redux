import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPerson } from '../../actions/actions'

class PeopleForm extends Component {
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
    this.props.createPerson(this.state)

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

export default connect(null, { createPerson })(PeopleForm);