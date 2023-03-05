import { ADD_FAV, DELETE_FAV } from "../actions";

const initialState = {
  favMovies: JSON.parse(localStorage.getItem("favMovies")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    }

    case DELETE_FAV: {
      return {
        ...state,
        favMovies: state.favMovies.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default reducer;
