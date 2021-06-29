/*
export function someMutation (state) {
}
*/
export function REMOVE_PRODUCT(state, payload){
  let index = state.lists.findIndex(p => p.id === payload);
  index !== -1 && state.lists.splice(index, 1)
}

export function MODIFY_PRODUCT(state, payload){
  let index = state.lists.findIndex(p => p.id === payload.id);
  index !== -1 && (state.lists[index] = payload)
}

export function INSERT_PRODUCT(state, payload){
  state.lists.unshift(payload)
}
