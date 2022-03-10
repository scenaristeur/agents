// import Vue from 'vue'
const state = () => ({
  gunUser : undefined,
  // brain: "",
  // brains: []
})

const actions = {
  // async addWorkspace(context, w) {
  //   context.state.pod.workspaces.push(w)
  //   Vue.prototype.$addWorkspaceToPod(w)
  // },
}

const mutations = {
  setGunUser(state,u){
    console.log(u)
    state.gunUser = u
  },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
