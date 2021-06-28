/*
export function someMutation (state) {
}
*/
export function REMOVE_PRODUCT(state, payload){
  let index = state.lists.findIndex(p => p.id === payload);
  index !== -1 && state.lists.splice(index, 1)
}
