import React, { Component } from 'react'
import PeopleForm from './PeopleForm'
import { connect } from 'react-redux';
import { fetchPeople } from '../../actions/actions';
import Person from './Person';

class People extends Component {
  componentDidMount(){
    // fetch get all my people and dispatch change to store
    // fetch("http://localhost:3000/people")
    // .then(r => r.json())
    // .then(data => this.props.dispatchSetPeople(data))
    this.props.dispatchFetchPeople()

  }

  render() {
    return (
      <div>
      <h1>People</h1>
      <PeopleForm />
      <ul>
        {this.props.people.map(p => <Person key={p.id} {...p}/>)}
      </ul>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchFetchPeople: () => dispatch(fetchPeople()) 
  }
}

function mapStateToProps(state){
  return {
    people: state.people
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(People)