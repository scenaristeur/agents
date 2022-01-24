<template>
  <div>

    <div v-if="paths.length>0">Exploring {{ paths.length }} paths.
      <!-- <div v-if="paths.length <3"> {{ paths}}</div> -->
    </div>
    <CommandInput />
    <Graph :nodes="nodes" :links="links" />
    {{ pod }}
    <Comunica />
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
    'CommandInput': () => import('@/components/directed/CommandInput'),

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
    onInputObjectChange(data){
      console.log("onCommand",data)
      let nodeSubject, nodeObject, edge
      switch (data.type) {
        case 'triplet':
        nodeSubject = this.nodeFromLabel(data.value.subject)
        this.saveNode(nodeSubject)
        nodeObject = this.nodeFromLabel(data.value.object)
        this.saveNode(nodeObject)
        console.log(nodeSubject.url, nodeObject.url)
        edge = this.edgeFromLabel({source: nodeSubject.url, target: nodeObject.url, label: data.value.predicate})
        console.log(edge)
        this.saveEdge(edge)
        break;
        case 'url':
        console.log(data)
        break;
        default:
        console.log("TODO",data)
      }
    },
    saveNode(n){
      var index = this.nodes.findIndex(x => x.url==n.url);
      index === -1 ? this.nodes.push(n) : Object.assign(this.nodes[index], n)
      this.sendUpdate(n)
    },
    saveEdge(e){
      console.log(e)
      console.log(this.links)
      this.links.push(e)
    //  var index = this.links.findIndex(x => x.id==e.id);
      //index === -1 ? this.links.push(e) : Object.assign(this.links[index], e)
      console.log(this.nodes, this.links)
      this.sendUpdate(e)
    },
    nodeFromLabelVis(label) {
      return {id: "#"+label.trim().split(' ').join('_'),
      label: label,
      color: {  background: '#D2E5FF', border: '#2B7CE9'},
      shape: 'ellipse'}
    },
    nodeFromLabel(label) {
      let url = /*"#"+*/label.trim().split(' ').join('_')
      return {url: url , name: label/*, color: "#D2E5FF"*//*, type: "storage"*/}
      },
      edgeFromLabel(data){
        console.log(data)
        return { source: data.source, target: data.target, label: data.label}
      },
      edgeFromLabelVis(data){
        return { from: data.from, to: data.to, label: data.label}
      },
      async sendUpdate(p){
        console.log(p)
        console.log(this.url)
        //  console.log(this.network)
        console.log("le json", this.json)


        // if(this.json != undefined && this.json["@context"] != "https://data.virtual-assembly.org/context.json"){
        //   console.log("TODO must send only if different ")
        //   let identiques = this.arraysEqual(this.json.nodes, this.network.nodes) && this.arraysEqual(this.json.edges, this.network.edges)
        //   console.log("identiques",identiques)
        //   if (identiques == false && this.url != undefined){
        //     this.json.nodes = this.network.nodes
        //     this.json.edges = this.network.edges
        //     this.json.modified = new Date()
        //     console.log(this.json)
        //
        //     await fc.createFile( this.json.url, JSON.stringify(this.json), "application/ld+json" ).then(
        //       f => {
        //         console.log(f)
        //       });
        //     }
        //   }

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
              r.name = r.jsonld["name"]
              console.log("jsonld",r.jsonld['properties'])
              for (const p of r.jsonld['properties']){
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
          console.log("exist ? ", exist)
          exist ==  undefined ? this.nodes.push({url:url, name: url, color: "#ff00ff", type: "storage"}) : ""
          this.explore(this.mustExplore)
        }
      },
      inputObject(){
        this.onInputObjectChange(this.inputObject)
      },
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
      inputObject: {
        get () { return this.$store.state.app.inputObject},
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
    }
  }
  </script>

  <style>

  </style>
