<template>
  <div>
    <Comunica />
    <div v-if="paths.length>0">Exploring {{ paths.length }} paths.
      <!-- <div v-if="paths.length <3"> {{ paths}}</div> -->
    </div>
    <Graph :nodes="nodes" :links="links" />
    {{ pod }}
    <!-- <Hello /> -->
  </div>
</template>

<script>
// import externalComponent from '@/utils/external-component';
//
// const Hello = () => externalComponent('https://components.solidcommunity.net/public/hello/Hello.bdd71b8bbb487af4de05.umd.min.js');


export default {
  name: "Visu",
  components: {
    // 'ThreeScene': () => import('@/components/three/ThreeScene'),
    'Graph': () => import('@/components/directed/Graph'),
    'Comunica': () => import('@/components/dev/Comunica'),
    // Hello
    // HelloWorld
  },
  data(){
    return{
      nodes: [],
      links: [],
      paths: [],
      jump: 0
    }
  },
  methods: {
    async explore2(path){
      console.log(path)

    },
    async exploreFriends(pod){
      let app = this
      app.jump ++

      pod.friends.forEach(async function(f){
        console.log(f)
        try{
          if (f.webId != undefined){
            let friendNode = {url: f.webId, name: f.webId, type: "friend", color: "#00ff00", webId: f.webId}
            console.log(friendNode)
            let p = await app.$getPodInfos(friendNode)
            console.log(p)
            let exist = app.nodes.find(x => x.url == friendNode.url)
            console.log("exist", exist)
            exist == undefined ? app.nodes.push(friendNode) : ""
            // app.nodes.push(friendNode)
            app.links.push({source: pod.webId, target: f.webId, label: "friend"})
            let storageNode = {url: p.storage, name: "storage", color: "#ffff00", type: "storage"}
            app.nodes.push(storageNode)
            app.links.push({source: f.webId, target: p.storage, label: "storage"})
            console.log(app.jump)
          }{
            console.log("webId undefined", f.webId)
          }
          // if (app.jump <4){
          //   app.exploreFriends(p)
          // }
        }catch(e){
          console.log(e)
        }
        //   try{
        //   let friendNode = {url: f.webId, name: f.webId, type: "friend", color: "#00ff00", webId: f.webId}
        //   app.nodes.push(friendNode)
        //   app.links.push({source: pod.webId, target: f.webId, label: "friend"})
        //
        //
        //   let p = await app.$getPodInfos(friendNode)
        //   console.log(p)
        //   let storageNode = {url: p.storage, name: "storage", color: "#ffff00", type: "storage"}
        //   app.nodes.push(storageNode)
        //   app.links.push({source: f.webId, target: p.storage, label: "storage"})
        //   //   app.explore(p.storage)
        //
        //   if (app.jump <7){
        //     app.exploreFriends(p)
        //
        //
        //   }
        // }catch(e){
        //   console.log(e)
        // }




        // let f_pod = {webId: f}
        // console.log(f)
        // let pod = await app.$getPodInfos(f_pod)
        // console.log("Friend", pod)
      })
    },
    async explore(path){
      console.log(path)
      if (path.endsWith('card#me')){
        let p = await this.$getPodInfos({webId: path})
        path = p.storage
        this.exploreFriends(p)
      }
      let app = this
      let resources = await this.$getResources(path)
      resources.forEach(function(r){

        app.nodes.push(r)
        app.links.push({source: path, target: r.url})
        // if (r.url.endsWith('/')){
        //   app.explore(r.url)
        // }

      })
    },

    async explore1(path){
      this.paths.push(path)
      //  console.log("explore", path)
      let resources = await this.$getResources(path)
      console.log(resources)
      let app = this
      resources.forEach(function(r){
        if (r.type == "folder"){
          app.explore(r.url)
        }else if(r.url.endsWith('.jsonld') || r.file.type == "application/ld+json"){
          r.color = "#ffff00"
          const reader = new FileReader();
          reader.onload = async () => {
            //  console.log(reader.result)
            r.jsonld = JSON.parse(reader.result)
            r.name = r.jsonld["ve:name"]
            console.log("jsonld",r.jsonld['ve:properties'])
            for (const p of r.jsonld['ve:properties']){
              console.log(p)
              for (const v of p.values){
                console.log(v)
              }

            }
            // if (getContentType(file) == 'application+json'){
            //   content = JSON.parse(reader.result);
            // }
            // console.log("content",content)
            // store.commit('bureau/setContent',content)
          };
          reader.onerror = (error) => {
            console.log(error);
          };
          reader.readAsText(r.file);


        }else if(r.url.endsWith('.ttl')){
          r.color = "#00ff00"
        }
        if(r.name == "inbox"){
          r.color = "#ffffff"
        }
        app.nodes.push(r)
        app.links.push({source: path, target: r.url})

      })
      this.paths = this.paths.filter(e => e !== path);
    }
  },
  watch:{
    async pod(){
      if (this.pod != null){
        console.log(this.pod)
        //  let app = this
        let storageNode = {url: this.pod.storage, name: "storage", color: "#ffff00", type: "storage"}
        this.nodes.push(storageNode)
        let webIdNode = {url: this.pod.webId, name: this.pod.name || this.pod.webId, color: "#ff0000", type: "webId"}
        this.nodes.push(webIdNode)
        this.links.push({source: this.pod.webId, target: this.pod.storage, label: "storage"})
        this.explore(this.pod.storage)
        this.exploreFriends(this.pod)
      }else{
        this.nodes = []
        this.links = []
      }

    },
    mustExplore(){
      if(this.mustExplore != null){
        console.log("mustExplore", this.mustExplore)
        let exist = this.nodes.find(x => x.url = this.mustExplore)
        let url = this.mustExplore

        exist ==  undefined ? this.nodes.push({url:url, name: url, color: "#ff00ff", type: "storage"}) : ""
        this.explore(this.mustExplore)
      }
    }
  },
  computed:{
    pod:{
      get () { return this.$store.state.solid.pod },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    mustExplore:{
      get () { return this.$store.state.app.mustExplore },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
