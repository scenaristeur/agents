// import Vue from 'vue'
const state = () => ({
  files: [],
  folders: [],
  mustExplore: null,
  currentNode: null
  // bureau: null,
  // resource: null,
  // content: null
  //pod: null,
})

const actions = {
  // async addWorkspace(context, w) {
  //   context.state.pod.workspaces.push(w)
  //   Vue.prototype.$addWorkspaceToPod(w)
  // },
}

const mutations = {

  addFile(state,f){
    state.files.push(f)
  },
  addFolder(state,f){
    state.folders.push(f)
  },
  mustExplore(state, u){
    state.mustExplore = u
  },
  currentNode(state, n){
    state.currentNode = n
  }
  // setResource(state,r){
  //   state.resource = r
  // },
  // setContent(state,c){
  //   state.content = c
  // },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
