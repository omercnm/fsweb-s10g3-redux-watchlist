export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";

export function addFav(newFav) {
  return { type: ADD_FAV, payload: newFav };
}
export function deleteFav(id) {
  return { type: DELETE_FAV, payload: id };
}
