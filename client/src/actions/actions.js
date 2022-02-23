import { SET_PEOPLE, ADD_PERSON, DELETE_PERSON } from "./actionTypes"

const setPeople = (people) => {
  return {
    type: SET_PEOPLE,
    payload: people
  }
}

const addPerson = (person) => {
  return {
    type: ADD_PERSON,
    payload: person
  }
}

const deletePerson = id => {
  return {
    type: DELETE_PERSON,
    payload: id
  }
}

export const fetchPeople = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/people")
    .then(r => r.json())
    .then(data => dispatch(setPeople(data)))
  }
}

export const createPerson = (formData) => {
  return dispatch => {
    fetch("http://localhost:3000/people", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if(r.ok){
        r.json().then(person => dispatch(addPerson(person)))
      } else {
        r.json().then(err => console.error(err))
      }
    })
  }
}

export const destroyPerson = id => {
  return dispatch => {
    fetch(`http://localhost:3000/people/${id}`, {
      method: "DELETE"
    })
    .then(r => dispatch(deletePerson(id)))
  }
}