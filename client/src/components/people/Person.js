import React from 'react';
import { connect } from 'react-redux';
import { destroyPerson } from '../../actions/actions'
import PeopleForm from './PeopleForm';

class Person extends React.Component {
  state = {
    editing: false
  }

  toggleEdit = () => {
    this.setState(pS => ({editing: !pS.editing}))
  }

  render(){
    return (
      <>
        <li>{this.props.name}</li>
        <button onClick={() => this.props.destroyPerson(this.props.id)}>X</button>
        <button onClick={this.toggleEdit}>{this.state.editing ? 'Cancel' : 'Edit'}</button>
        {this.state.editing ? <PeopleForm 
          id={this.props.id} 
          name={this.props.name}  
          toggleEdit={this.toggleEdit}
        /> : null}
      </>
    )
  }
}

export default connect(null, { destroyPerson })(Person)
