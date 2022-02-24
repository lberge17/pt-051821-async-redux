import { SET_PEOPLE, ADD_PERSON, DELETE_PERSON, EDIT_PERSON, SET_STARSHIPS, ADD_STARSHIP, EDIT_STARSHIP, DELETE_STARSHIP } from "./actionTypes"

// PEOPLE ACTIONS

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

const editPerson = person => {
  return {
    type: EDIT_PERSON,
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

export const updatePerson = person => {
  return dispatch => {
    fetch(`http://localhost:3000/people/${person.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(person)
    })
    .then(r => {
      if (r.ok){
        // add person to redux
        r.json().then(p => dispatch(editPerson(p)))
      } else {
        r.json().then(err => console.error(err))
      }
    })
    .catch(err => console.log(err))
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

// STARSHIPS ACTION CREATORS

const setStarships = starships => ({type: SET_STARSHIPS, payload: starships})
const addStarship = starship => ({type: ADD_STARSHIP, payload: starship})
const editStarship = starship => ({type: EDIT_STARSHIP, payload: starship})
const deleteStarship = id => ({type: DELETE_STARSHIP, payload: id})

export const fetchStarships = () => {
  return dispatch => {
    fetch("http://localhost:3000/starships")
    .then(r => r.json())
    .then(starships => dispatch(setStarships(starships)))
    .catch(err => console.error(err))
  }
}

export const createStarship = starship => {
  return dispatch => {
    fetch("http://localhost:3000/starships", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(starship)
    })
    .then(r => {
      if (r.ok){
        r.json().then(starship => dispatch(addStarship(starship)))
      } else {
        r.json().then(err => console.error(err))
      }
    })
    .catch(err => console.error(err))
  }
}

export const updateStarship = starship => {
  return dispatch => {
    fetch(`http://localhost:3000/starships/${starship.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(starship)
    })
    .then(r => {
      if (r.ok){
        r.json().then(starship => dispatch(editStarship(starship)))
      } else {
        r.json().then(err => console.error(err))
      }
    })
    .catch(err => console.error(err))
  }
}

export const destroyStarship = id => {
  return dispatch => {
    fetch(`http://localhost:3000/starships/${id}`, {
      method: "DELETE"
    })
    .then(r => {
      dispatch(deleteStarship(id))
    })
    .catch(err => console.error(err))
  }
}