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


export function REMOVE_CATEGORY(state, payload){
  let index = state.category.findIndex(p => p.id === payload);
  index !== -1 && state.category.splice(index, 1)
}
export function MODIFY_CATEGORY(state, payload){
  let index = state.category.findIndex(p => p.id === payload.id);
  index !== -1 && (state.category[index] = payload)
}
export function INSERT_CATEGORY(state, payload){
  state.category.unshift(payload)

}
