// import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)


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
      store.commit('gun/setBrain', brain)
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





  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
