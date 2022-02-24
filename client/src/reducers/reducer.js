import { ADD_PERSON, ADD_STARSHIP, DELETE_PERSON, DELETE_STARSHIP, EDIT_PERSON, EDIT_STARSHIP, SET_PEOPLE, SET_STARSHIPS } from "../actions/actionTypes";

const initialState = {
  starships: [],
  people: [],
  planets: []
}

function reducer(state = initialState, action){
  let idx;
  switch (action.type) {
    case SET_PEOPLE:
      
      return {
        ...state,
        starships: [...state.starships],
        people: action.payload,
        planets: [...state.planets]
      };

    case ADD_PERSON:

      return {
        ...state,
        starships: [...state.starships],
        people: [...state.people, action.payload],
        planets: [...state.planets]
      };

    case EDIT_PERSON:
      // {type: "EDIT_PERSON", payload: {id, name, rehjsknlkd}}

      // const newPeople = state.people.map(p => {
      //   if (p.id === action.payload.id){
      //     return action.payload
      //   }
      //   return p
      // })
      
      idx = state.people.findIndex(p => p.id === action.payload.id)

      return {
        ...state,
        starships: [...state.starships],
        people: [
          ...state.people.slice(0, idx),
          action.payload,
          ...state.people.slice(idx + 1)
        ],
        planets: [...state.planets]
      }

    case DELETE_PERSON:
      // {type: "DP", payload: 9}
      idx = state.people.findIndex(p => p.id === action.payload)

      return {
        ...state,
        starships: [...state.starships],
        people: [
          ...state.people.slice(0, idx),
          ...state.people.slice(idx + 1)
        ],
        planets: [...state.planets]
      };

    case SET_STARSHIPS:

      return {
        ...state,
        people: [...state.people],
        planets: [...state.planets],
        starships: action.payload
      };

    case ADD_STARSHIP:

      return {
        ...state,
        people: [...state.people],
        planets: [...state.planets],
        starships: [...state.starships, action.payload]
      };

    case EDIT_STARSHIP:

      idx = state.starships.findIndex(s => s.id === action.payload.id)

      return {
        ...state,
        people: [...state.people],
        planets: [...state.planets],
        starships: [
          ...state.starships.slice(0, idx),
          action.payload,
          ...state.slice(idx + 1)
        ]
      };

    case DELETE_STARSHIP:
      
      idx = state.starships.findIndex(s => s.id === action.payload)

      return {
        ...state,
        people: [...state.people],
        planets: [...state.planets],
        starships: [
          ...state.starships.slice(0, idx),
          ...state.slice(idx + 1)
        ]
      };
  
    default:
      return state;
  };
}

export default reducer;