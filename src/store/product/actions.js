
export function DELETE_PRODUCT({commit}, payload){
  commit('REMOVE_PRODUCT', payload)
}

export function UPDATE_PRODUCT({commit}, payload){
  commit('MODIFY_PRODUCT', payload)
}

export function SAVE_PRODUCT({commit}, payload){
  commit('INSERT_PRODUCT', payload)
}

export function DELETE_CATEGORY({commit}, payload){
  commit('REMOVE_CATEGORY', payload)
}
