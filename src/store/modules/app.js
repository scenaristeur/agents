// import Vue from 'vue'
const state = () => ({
  world: null,
  navigation: "explore",
  brains: {},
  brain: null,
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
  setBrain(state, b){
    console.log("BRAIN", b)
    state.brain = b
  },
  setWorld(state, w){
    state.world = w
  },
  setNavigation(state, n){
    state.navigation = n
  },
  setBrainGroup(state, data){
    state.brains[data.world] == undefined ? state.brains[data.world] = {} : ""
    state.brains[data.world][data.privacy] = data.brains
    console.log(state.brains)
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
