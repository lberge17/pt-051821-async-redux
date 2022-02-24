import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPerson, updatePerson } from '../../actions/actions'

class PeopleForm extends Component {
  state = {
    name: this.props.name ? this.props.name : ""
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if(this.props.id){
      // dispatch an action to edit person
      this.props.updatePerson({...this.state, id: this.props.id})
      this.props.toggleEdit()
    } else {
      this.props.createPerson(this.state)
    }
    
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
        <input type="submit" value={this.props.id ? "Edit" : "Create"} />
      </form>
    )
  }
}

export default connect(null, { createPerson, updatePerson })(PeopleForm);