<template>
  <div>
    {{ pod }}
    {{ paths}}
    <Graph :nodes="nodes" :links="links" />
  </div>
</template>

<script>
export default {
  name: "Visu",
  components: {
    // 'ThreeScene': () => import('@/components/three/ThreeScene'),
    'Graph': () => import('@/components/directed/Graph'),
    // HelloWorld
  },
  data(){
    return{
      nodes: [],
      links: [],
      paths: []
    }
  },
  methods: {
    async explore(path){
      this.paths.push(path)
      console.log("explore", path)
      let resources = await this.$getResources(path)
    //  console.log(resources)
      let app = this
      resources.forEach(function(r){
        if(r.url.endsWith('.jsonld')){
          r.color = "#ffff00"
        }
        if(r.url.endsWith('.ttl')){
          r.color = "#00ff00"
        }
        app.nodes.push(r)
        app.links.push({source: path, target: r.url})
        if (r.type == "folder"){
          app.explore(r.url)
        }
      })
      this.paths = this.paths.filter(e => e !== path);
    }
  },
  watch:{
    async pod(){
      if (this.pod != null){
        console.log(this.pod)
        let app = this
        let storageNode = {url: this.pod.storage, name: "storage", color: "#ffff00", type: "storage"}
        this.nodes.push(storageNode)
        let webIdNode = {url: this.pod.webId, name: this.pod.name || this.pod.webId, color: "#ff0000", type: "webId"}
        this.nodes.push(webIdNode)
        this.links.push({source: this.pod.webId, target: this.pod.storage, label: "storage"})
         this.explore(this.pod.storage)
        this.pod.friends.forEach(async function(f){
          console.log(f)
          let friendNode = {url: f.webId, name: f.webId, type: "friend", color: "#00ff00"}
          app.nodes.push(friendNode)
          app.links.push({source: app.pod.webId, target: f.webId, label: "friend"})
          // let f_pod = {webId: f}
          // console.log(f)
          // let pod = await app.$getPodInfos(f_pod)
          // console.log("Friend", pod)
        })
      }else{
        this.nodes = []
        this.links = []
      }

    }
  },
  computed:{
    pod:{
      get () { return this.$store.state.solid.pod },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
