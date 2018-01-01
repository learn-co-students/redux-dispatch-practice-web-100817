export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
    return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
    const index = state.pets.findIndex(pet => pet.id === action.id)
    return {pets: [...state.pets.slice(0, index), ...state.pets.slice(index+1)]}
    default: return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let id = document.getElementById("container")
  let pets = state.pets.map(pet => {
    return `<li>${pet.name}</li>` }
  )
  id.innerHTML= `<ul>${pets}</ul>`
}
