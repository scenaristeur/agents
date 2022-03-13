<template>
  <div>

    <div v-if="paths.length>0">Exploring {{ paths.length }} paths.
      <!-- <div v-if="paths.length <3"> {{ paths}}</div> -->
    </div>
    <CommandInput />
    <Node v-if="navigation == 'preview' && currentNode != null" />
    <Graph :nodes="nodes" :links="links" :graphNeedUpdate="graphNeedUpdate" @update="graphNeedUpdate = $event;" />

    {{ pod }}
    <!-- <Comunica /> -->
    <!-- <Hello /> -->
  </div>
</template>

<script>
// import externalComponent from '@/utils/external-component';
//
// const Hello = () => externalComponent('https://components.solidcommunity.net/public/hello/Hello.bdd71b8bbb487af4de05.umd.min.js');

import { v4 as uuidv4 } from 'uuid';
export default {
  name: "Visu",
  components: {
    // 'ThreeScene': () => import('@/components/three/ThreeScene'),
    'Graph': () => import('@/components/directed/Graph'),
    // 'Comunica': () => import('@/components/dev/Comunica'),
    'CommandInput': () => import('@/components/directed/CommandInput'),
    'Node': () => import('@/components/ui/Node'),

    // Hello
    // HelloWorld
  },
  data(){
    return{
      //  nodes: [],
      links: [],
      paths: [],
      jump: 0,
      graphNeedUpdate : false,
      gunCpt : 0,
      gunNodes : {},
      gunLinks: []

    }
  },
  mounted(){
    console.log("MUST TAKE A LOOK AT COMMUNICA !")
    this.showWorlds()
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
        console.log(nodeSubject.id, nodeObject.id)
        edge = this.edgeFromLabel({source: nodeSubject.id, target: nodeObject.id, label: data.value.predicate})
        console.log(edge)
        this.saveEdge(edge)
        data.triple = {subject: nodeSubject, edge: edge, object: nodeObject}
        this.$saveToGun(data)
        break;
        case 'url':
        console.log(data)
        break;
        default:
        console.log("TODO",data)
      }
    },
    saveNode(n){
      var index = this.nodes.findIndex(x => x.id==n.id);
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
    // nodeFromLabelVis(label) {
    //   return {id: "#"+label.trim().split(' ').join('_'),
    //   label: label,
    //   color: {  background: '#D2E5FF', border: '#2B7CE9'},
    //   shape: 'ellipse'}
    // },
    nodeFromLabel(label) {
      let id = "#"+label.trim().split(' ').join('_')
      return {id: id , name: label,   age: 0,
        type: "neurone"/*, color: "#D2E5FF"*//*, type: "storage"*/}
      },
      edgeFromLabel(data){
        console.log(data)
        return { source: data.source, target: data.target, label: data.label}
      },
      // edgeFromLabelVis(data){
      //   return { from: data.from, to: data.to, label: data.label}
      // },
      async sendUpdate(p){
        console.log(p)
        //  console.log(this.url)
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
        if (resources.compacted != undefined){
          this.processJsonld(resources)
        }else{
          resources.forEach(async function(r){

            if(r.type == "file"){
              console.log("on entre ici", r)
              await app.$getResource(r)
              let compacted = await app.$getJsonLd(r.url)
              console.log(compacted)
            }
            console.log(r)
            app.nodes.push(r)
            app.links.push({source: path, target: r.url})
            // if (r.url.endsWith('/')){
            // if (resources.length < 20){
            //   console.log("on continue ici, mais c'est pas propre, juste pour attraper le jsonld",r.url)
            //   app.explore(r.url)
            // }

            // }

          })
        }
      },
      processJsonld(data){
        // let compacted = data.compacted
        let url = `${data.compacted.url}`
        //  console.log(url)
        let index = -1
        for (let i = 0; i < this.nodes.length; i++){
          let n = this.nodes[i]
          //  console.log(n)
          //  console.log(i, n.url, n.url == url)
          if (n.url == url){
            index = i
            //  console.log(" trouv index", index)
            Object.assign(this.nodes[index], data.compacted)
            this.graphNeedUpdate = true
            // return
            //return it does not work if i return
          }
        }

        // FINDINDEX NOT WORK, why ?
        // var index = this.nodes.findIndex((x) => x.url === url);
        // console.log("index", index)
        // let node = this.nodes.find(x => x.url === url)
        // node.name = compacted.name
        // node.age = compacted.age
        //
        // console.log("Compacted", compacted, Array.isArray(compacted.properties))
        // for (const [key, val] of Object.entries(compacted)){
        //   console.log(key, "->", typeof val, val)
        // }
        // console.log(node)
        // console.log(this.nodes)



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
      },
      showWorlds(){
        console.log(this.worlds)

        this.savedWorld = {nodes: this.nodes, links: this.links}
        this.nodes = []
        this.links = []
        Object.assign(this.nodes, this.worlds)
        this.nodes.push({id:"worlds", name: "Worlds", color: "#ffff00", type: "univers"})
        this.worlds.forEach((w) => {
          let exist = this.nodes.find(x => x.id === w.status)
          // console.log("exist ? ", exist)
          let color = w.status == "enabled" ? "#00ff00" : "#ff0000"
          exist ==  undefined ? this.nodes.push({id:w.status, name: w.status, color: color, type: "status"}) : ""
          this.links.push({source: w.id, target: w.status, label: "status"})
          this.links.push({source: "worlds", target: w.status, })
        });


      },
      gunNodeLoop1(o, parent_id){
        console.log(o,parent_id)
        let parent =  this.nodes.find(x => x.id==parent_id);
        console.log("node parent", parent)
        let id =  uuidv4()
        let node = {id: id}

        for (const [key, value] of Object.entries(o)){
          console.log(key, typeof value, value)
          switch (typeof value) {
            case 'string':
            case 'number':
            case 'boolean':
            parent[key] = value
            var index = this.nodes.findIndex(x => x.id==parent.id);
            index === -1 ? this.nodes.push(parent) : Object.assign(this.nodes[index], parent)
            break;
            case 'object':
            this.nodes.push(node)
            this.links.push({source: parent_id, target: node.id, label: key})
            this.gunNodeLoop(value, node.id)
            break;
            default:
            console.log("no handler for ", typeof value)

          }


        }

        // console.log("parent", parent)
        // for (const [key, value] of Object.entries(o)){
        //   console.log(key, value)
        //   let n = {id: key, name: key}
        //   var index = this.nodes.findIndex(x => x.id==n.id);
        //   index === -1 ? this.nodes.push(n) : Object.assign(this.nodes[index], n)
        // //  this.links.push({source: parent, target: n.id, label: key})
        //   if(typeof value == 'object'){
        //     console.log("object", value)
        //     this.gunNodeLoop(value, key)
        //   }else{
        //     console.log("string", key, value)
        //   }
        // }
      },
      readGunNode(soul, gunCpt){
        gunCpt ++
        let app = this
        console.log(gunCpt, "soul",soul)
        let n = {id: soul, name: soul}
        this.gunNodes[soul] = n
        var index = this.nodes.findIndex(x => x.id==n.id);
        // console.log("index", index, n)
        index === -1 ? this.nodes.push(n) : Object.assign(this.nodes[index], n)
        //
        // let app = this

        // if (this.gunCtp < 20){
        console.log(gunCpt  , Object.entries(app.gunNodes).length)
        if (gunCpt < 3 && Object.entries(app.gunNodes).length <50){
        this.$gun.get(soul).map((gunNode, key) => {

          if(gunNode != null && gunNode._ != undefined){
            //console.log(gunCpt, "-node",gunNode)
            let newSoul = gunNode._['#']
            //console.log("newSoul",newSoul)

            this.readGunNode(newSoul, gunCpt)

            // console.log("<-",app.links)

            let link = {source: soul, target: newSoul, label: key }
            //  console.log(link)
            app.gunLinks.push(link)
          }else{
            //  console.log(gunCpt, "--pas de soul", gunNode)
            gunNode != null ? this.gunNodes[soul][key] = gunNode : ""
          }

        })
          }
        //console.log(gunCpt,"-->",this.gunNodes, links)
        for (const n of Object.values(this.gunNodes)){
          var index2 = this.nodes.findIndex(x => x.id==n.id);
          //  console.log("index", index2, n)
          index2 === -1 ? this.nodes.push(n) : Object.assign(this.nodes[index2], n)
        }

        // links.forEach((l) => {
        //   this.links.push(l)
        // });

        // this.nodes.push(node)
        // console.log(this.nodes)
        console.log("done read gun")
          this.graphNeedUpdate = true
        // }
      }

    },
    watch:{
      gunNode1(){
        let gunCpt = 0
        // let app = this
        this.gunNodes = {}
        this.readGunNode(this.gunNode.id, gunCpt)
        console.log("DONEGUN ")

        // setTimeout(function () {
        //
        //   for (const l of app.gunLinks) {
        //     console.log(l)
        //     try{
        //       app.links.push(l)
        //       console.log(app.links.length)
        //     }catch(e){
        //       console.log(e)
        //     }
        //
        //   }
        //
        // }, 5000);
        //     this.graphNeedUpdate = true


      },
      gunNode(){
        console.log(this.gunNode)
        // this.gunNodes = []
        // this.nodes = []
        // this.links = []
        var index = this.nodes.findIndex(x => x.id==this.gunNode.id);
        index === -1 ? this.nodes.push(this.gunNode) : Object.assign(this.nodes[index], this.gunNode)

        // let app = this
        if(this.gunNode.type == 'brain'){
          // this.$gun.get(this.currentNode.id).open((doc) => {// listen / on
          this.$gun.get(this.gunNode.id).load((doc) => { // once
            console.log("doc", doc)
             Object.assign(this.nodes[index], doc)
          //  app.gunNodeLoop(doc.object, this.gunNode.id)
            console.log("done")
            //this.graphNeedUpdate = true
          });

        }

      },

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
          exist ==  undefined ? this.nodes.push({id: url, url:url, name: url, color: "#ff00ff", type: "storage"}) : ""
          this.explore(this.mustExplore)
        }
      },
      inputObject(){
        this.onInputObjectChange(this.inputObject)
      },
      worlds(){
        this.showWorlds()
      }
      // nodes(){
      //   console.log("visu nodes", this.nodes)
      //   // this.nodes.forEach((node) => {
      //   //   console.log(node.id, node.name, node.url)
      //   // });
      // },
      // edges(){
      //   console.log("visu edges", this.edges)
      //   // this.nodes.forEach((node) => {
      //   //   console.log(node.id, node.name, node.url)
      //   // });
      // }
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
      nodes:{
        get () { return this.$store.state.nodes.nodes },
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
      worlds:{
        get () { return this.$store.state.app.worlds },
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
      navigation:{
        get () { return this.$store.state.app.navigation },
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
      currentNode:{
        get () { return this.$store.state.app.currentNode },
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
      gunNode:{
        get () { return this.$store.state.app.gunNode },
        set (/*value*/) { /*this.updateTodo(value)*/ }
      }
    }
  }
  </script>

  <style>

  </style>
