// import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)


    Vue.prototype.$gunExplore = async function(rootNode){
      // inspiration https://github.com/Stefdv/gun-ui-graph/blob/master/gun-ui-graph.html
      console.log(rootNode)
      console.log('build gun._.graph')
      // var self = this
      // function each(node) {
      //   console.log(node)
      //   //self._processGunNode(node)
      // }
      // function ended(collection) {
      //   console.log('Done mapping over:', collection);
      //   //self._initCy()
      //
      //
      //   self._mapNodes()
      // }

      let node = Vue.prototype.$gun.get(rootNode)//.valMapEnd(each,ended)
      console.log("Gun Node", node)
      let graph = await processNode(node)
      console.log("graph", graph)
      console.log(Vue.prototype.$gun)
      Vue.prototype.$gun.get(rootNode).open((doc) => {
      console.log("doc", doc)
      });
      return graph

    }
    async function processNode(n){
      let gunNodes = []
       var soul = n._['#'];
       console.log("soul", soul)
       n.map().once((node) => {
         //console.log(key, node)
         gunNodes.push(node)
         // add results straight to the Vue component state
         // and get updates when nodes are updated by GUN
         // this.todos[key] = node;
         //  console.log(this.todos)
       });
      //let isSet = await _isSet(soul)
      //console.log(isSet)
      // console.log(gunNodes)
      return gunNodes
    }


    Vue.prototype.$createBrain = async function(brain){

      console.log("creation",brain)
      let brains = []
      let rootNode = null
      switch (brain.world) {
        case "gun":
        if (brain.privacy == "user"){
          rootNode = Vue.prototype.$gun.user().get('brains')
        }else {
          rootNode = Vue.prototype.$gun.get('brains')
        }



        rootNode.map().on((node, key) => {
          console.log(key, node)
          brains.push({key: key, node: node})
          // add results straight to the Vue component state
          // and get updates when nodes are updated by GUN
          // this.todos[key] = node;
          //  console.log(this.todos)
        });

        rootNode.set({name: brain.name, created: Date.now(), type: brain.type})


        brain.brains = brains
        console.log("brains",brain.brains)



        break;
        default:
        console.log("todo")
      }

      store.commit('app/setBrain', brain)
      return brain
    }

    Vue.prototype.$gunGet = async function(brain){
      let gunNodes = []
      Vue.prototype.$gun.get(brain.name).map().on((node, key) => {
        console.log(key, node)
        gunNodes.push({key: key, node: node})
        // add results straight to the Vue component state
        // and get updates when nodes are updated by GUN
        // this.todos[key] = node;
        //  console.log(this.todos)
      });
      console.log(gunNodes)
      brain.gunNodes = gunNodes
      console.log(brain)
      store.commit('app/setBrain', brain)
      //  Vue.prototype.$listenNeurones(brain)
      return brain
    }



    Vue.prototype.$saveToGun = async function(data){
      console.log("brain", store.state.gun.brain)
      let brain_name = store.state.gun.brain.name
      console.log(data, data.value, data.triple)
      let object = data.triple.object
      delete object.__ob__
      delete object.__threeObj
      let objectNode  = Vue.prototype.$gun.get(brain_name).set(object)

      let subject = data.triple.subject
      delete subject.__ob__
      delete subject.__threeObj

      let key = data.triple.edge.label
      subject[key] = objectNode


      console.log(subject)

      Vue.prototype.$gun.get(brain_name).set(subject)

    }

    // Vue.prototype.$listenNeurones = async function(brain){
    //   Vue.prototype.$gun.get(brain.name).map().on((node, key) => {
    //     console.log(key, node)
    //     // add results straight to the Vue component state
    //     // and get updates when nodes are updated by GUN
    //     // this.todos[key] = node;
    //     //  console.log(this.todos)
    //   });
    //   console.log("ready to hear neurones")
    // }




    // async function _isSet(ref){
    //   Vue.prototype.$gun.get(ref).once(function(node){
    //     let set = true
    //     let iterated = false
    //     console.log(node)
    //     // Vue.prototype.$gun.node.is(node, function(value, field){
    //     //   console.log(field)
    //     //   iterated = true
    //     //   if(!Vue.prototype.$gun.val.rel.is(value)){
    //     //     set = false
    //     //   }
    //     // })
    //     return {set: set, iterated: iterated}
    //   })
    // }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
