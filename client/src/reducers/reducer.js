import { ADD_PERSON, DELETE_PERSON, SET_PEOPLE } from "../actions/actionTypes";

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
  
    default:
      return state;
  };
}

export default reducer;