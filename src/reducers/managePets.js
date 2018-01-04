export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] };

    case 'REMOVE_PET':
      const toRemove = state.pets.findIndex(pet => pet.id === action.id);
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, toRemove),
          ...state.pets.slice(toRemove + 1)
        ]
      });
    default:
      return state;
  }
}

// set state with our manage pets function, and persis the state
export function dispatch(action) {
  state = managePets(state, action);
  render();
}

//set container in petPage, map over state and return our component, and render it in a ul
export function render() {
  let petPage = document.getElementById('container');
  let petList = state.pets.map(pet => {
    return `<li>${pet.name}</li>`;
  });
  petPage.innerHTML = `<ul>${petList}</ul>`;
}
