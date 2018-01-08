export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      return { ...state, pets: [...state.pets, action.pet] };
    case "REMOVE_PET":
      let index = state.pets.findIndex(pet => pet.id === action.id);
      return {
        ...state,
        pets: [...state.pets.slice(0, index), ...state.pets.slice(index + 1)]
      };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const newHTML = `<ul>${state.pets.map(pet => `<li>${pet.name}</li>`)}</ul>`;
  document.getElementById("container").innerHTML = newHTML;
}
