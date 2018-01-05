export let state;

export function managePets(state = { pets: [] }, action) {
  if (action.type === "ADD_PET") {
    return { pets: [...state.pets, action.pet] };
  } else if (action.type === "REMOVE_PET") {
    let indexToRemove = state.pets.findIndex(pet => pet.id === action.id);
    let newPets = Object.assign({}, state, {
      pets: [
        ...state.pets.slice(0, indexToRemove),
        ...state.pets.slice(indexToRemove + 1)
      ]
    });
    return newPets;
  } else {
    return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export const render = () => {
  let container = document.getElementById("container");
  let petsList = state.pets
    .map(pet => {
      return `<li>${pet.name}</li>`;
    })
    .join(" ");
  container.innerHTML = `<ul>${petsList}</ul>`;
};

// export let state;
//
// export const managePets = (
//   state = {
//     pets: []
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "ADD_PET":
//       return {
//         ...state,
//         pets: [...state.pets, action.pet]
//       };
//     case "REMOVE_PET":
//       const petIndex = state.pets.findIndex(pet => pet.id === action.id);
//       return {
//         ...state,
//         pets: [
//           ...state.pets.slice(0, petIndex),
//           ...state.pets.slice(petIndex + 1)
//         ]
//       };
//     default:
//       return state;
//   }
// };
//
// export const dispatch = action => {
//   state = managePets(state, action);
//   render();
// };
//
// export const render = () => {
//   let container = document.getElementById("container");
//   let petsList = state.pets
//     .map(pet => {
//       return `<li>${pet.name}</li>`;
//     })
//     .join(" ");
//   container.innerHTML = `<ul>${petsList}</ul>`;
// };
// // Error: Expected { pets: [ { name: 'Splash', species: 'Turtle' }, { name: 'avalanche', species: 'puppy', id: 101 }, { name: 'sally', species: 'camel', id: 102 } ], friends: [ { name: 'Splash', species: 'Turtle' }, { name: 'avalanche', species: 'puppy', id: 101 }, { name: 'Splash', species: 'Turtle' }, { name: 'avalanche', species: 'puppy', id: 101 }, { name: 'sally', species: 'camel', id: 102 } ] }
