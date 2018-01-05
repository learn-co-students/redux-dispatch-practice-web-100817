import React from "react";
export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pet] };
    case "REMOVE_PET": {
      const filtered = state.pets.filter(pet => {
        return pet.id !== action.id;
      });
      return { pets: filtered };
    }
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
  return state;
}

export function render() {
  let container = document.getElementById("container");
  let petsList = state.pets
    .map(pet => {
      return `<li>${pet.name}</li>`;
    })
    .join(" ");
  container.innerHTML = `<ul>${petsList}</ul>`;
}
