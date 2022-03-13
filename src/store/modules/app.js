// import Vue from 'vue'
const state = () => ({
  world: null,
  navigation: "create",
  brains: {},
  brain: null,
  // mode: null,
  files: [],
  folders: [],
  mustExplore: null,
  currentNode: null,
  inputObject: null,
  search: "",
  header: "tutorial",
  worlds: [
  // {id: "graph",
  // name: "Graph", status: "enabled", description: "description",
  // img: "http://gist.github.com/vasturiano/02affe306ce445e423f992faeea13521/raw/preview.png",
  // links: [{name: "3D force-directed graph", url : "https://vasturiano.github.io/3d-force-graph/"}]},


  {id: "solid",
  name: "Solid", status: "enabled", description: "Your data, your choice. Advancing Web standards to empower people.",
  img: "https://solidproject.org/assets/img/solid-emblem.svg",
  links: [
    {name: "Solid Project", url: "https://solidproject.org/"},
    {name: "Forum", url: "https://forum.solidproject.org/"},
    {name: "Inrupt", url: "https://inrupt.com/"},
  ]},

  // {id: "physic",
  // name: "Physic", status: "enabled", description: "A physic 3D world based on enble3D",
  // img: "https://enable3d.io/img/enable3d-logo.png",
  // links: [{name: "enable3D", url: "https://enable3d.io/" }]},



  // {id: "html", name: "Html", status: "todo", description: "a basic html world"},
  // {id: "js", name: "JavaScript", status: "todo", description: "some interaction js world"},
  // {id: "vuejs", name: "VueJs", status: "todo", description: "building a webapp is really simple",
  // links:[
  //   {name: "nodejs", url: "https://www.youtube.com/watch?v=KvzmOlxaAWo&t=9s"},
  //   {name: "vue component", url: "https://www.youtube.com/watch?v=_2cZ3u7jznc&t=93s"}
  // ]},
  {id: "ipfs", name: "Ipfs", status: "enabled", description: "description"},
  {id: "safe", name: "Safe", status: "disabled", description: "description"},
  {id: "notion", name: "Notion", status: "disabled", description: "description"},
  {id: "mld", name: "m-ld", status: "enabled", description: "description"},
  {id: "local", name: "local/indexdb", status: "work in progress", description: "description"},
  {id: "meta", name: "Metaverse", status: "disabled", description: "description"},
  {id: "filecoin", name: "filecoin", status: "disabled", description: "description"},
  {id: "robot", name: "Robots", status: "todo", description: "robots"},
  {id: "ia", name: "IA", status: "todo", description: "ia"},
  {id: "quantique", name: "Informatique Quantique", status: "todo", description: "quantique"},
  {id: "semapps", name: "Semapps", status: "todo", description: ""},
  {id: "fediverse", name: "Fediverse", status: "todo", description: ""},
  {id: "blockchain", name: "Blockchain", status: "todo", description: ""},
  {id: "crdt", name: "Crdt", status: "todo", description: ""},
  {id: "gun",
  name: "GunDB", status: "enabled", description: "A decentralized database",
  img: "https://camo.githubusercontent.com/64213f411349db936a0fa36ef41741b170d4c8d34d1cc0d1c887f7d880838707/68747470733a2f2f636c6475702e636f6d2f5445793979476834356c2e737667",
  links: [{name: "Doc", url:"https://gun.eco/"}]},
]

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
  setHeader(state, h){
    state.header = h
  },
  setBrain(state, b){
    console.log("BRAIN", b)
    state.brain = b
  },
  setWorld(state, w){
    state.header = w.id
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
  setCurrentNode(state, n){
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
