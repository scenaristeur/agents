// import Vue from 'vue'
const state = () => ({
  world: null,
  // mode: null,
  files: [],
  folders: [],
  mustExplore: null,
  currentNode: null,
  inputObject: null,
  search: ""
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
  setWorld(state, w){
    state.world = w
  },
  setSearch(state,s){
    state.search = s
  },
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
  },
  setInputObject(state, io){
    console.log(io)
    if (io.type == 'commande'){
      // switch (io.value) {
      //   case '/i':
      //     state.command = {action: 'import'}
      //     break;
      //   default:
      //
      // }
      state.action = {action: state.commands[io.value]}
      console.log(state.action)
      if(state.action.action == undefined){
        alert("Warning : Unknown action "+ io.value + " , type /h for help" )
      }
    }else{
      state.inputObject = io
    }

  },
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
