<template>
  <div>
    <Ui :Graph="Graph" :nodes="nodes" v-on:switch-brain="switchBrain"/>
    <div ref="graph"></div>

  </div>
</template>

<script>

//https://github.com/vasturiano/3d-force-graph


import ForceGraph3D from '3d-force-graph';
import SpriteText from 'three-spritetext';

// node text https://github.com/vasturiano/3d-force-graph/blob/master/example/html-nodes/index.html
// import '//unpkg.com/three/examples/js/renderers/CSS2DRenderer.js'

// import * as THREE from "three";
import {CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js';
// import {CSS2DRenderer, CSS2DObject} from 'three-css2drender'
export default {
  name: "Graph",
  props:['nodes', 'links', 'graphNeedUpdate'],
  components: {
    // 'ThreeScene': () => import('@/components/three/ThreeScene'),
    'Ui': () => import('@/components/directed/Ui'),
    // Hello
    // HelloWorld
  },
  data(){
    return{
      Graph: null,
      selectedNodes: new Set(),
      highlightNodes: new Set(),
      highlightLinks: new Set(),
      hoverNode: null
      // initData: {
      //   nodes: [],// {id: "https://spoggy-test13.solidcommunity.net/", url: "https://spoggy-test13.solidcommunity.net/", name: "ROOT", color: "#ff0000" } ],
      //   links: []
      // }
    }
  },
  mounted() {
    // const N = 300;
    // const gData = {
    //   nodes: [...Array(N).keys()].map(i => ({ id: i })),
    //   links: [...Array(N).keys()]
    //   .filter(id => id)
    //   .map(id => ({
    //     source: id,
    //     target: Math.round(Math.random() * (id-1))
    //   }))
    // };
    let app = this
    let elem = this.$refs.graph


    this.Graph1 =  ForceGraph3D()(elem)
    .graphData({nodes: this.nodes, links: this.links})
    .nodeColor(node => this.highlightNodes.has(node) ? node === this.hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)')
    .linkWidth(link => this.highlightLinks.has(link) ? 4 : 1)
    .linkDirectionalParticles(link => this.highlightLinks.has(link) ? 4 : 0)
    .linkDirectionalParticleWidth(4)
    .onNodeHover(node => {
      // no state change
      if ((!node && !this.highlightNodes.size) || (node && this.hoverNode === node)) return;

      this.highlightNodes.clear();
      this.highlightLinks.clear();
      if (node && node.neighbors) {
        this.highlightNodes.add(node);
        node.neighbors.forEach(neighbor => this.highlightNodes.add(neighbor));
        node.links.forEach(link => this.highlightLinks.add(link));
      }

      this.hoverNode = node || null;

      this.updateHighlight();
    })
    .onLinkHover(link => {
      this.highlightNodes.clear();
      this.highlightLinks.clear();

      if (link) {
        this.highlightLinks.add(link);
        this.highlightNodes.add(link.source);
        this.highlightNodes.add(link.target);
      }

      this.updateHighlight();
    });

    this.Graph = ForceGraph3D({
      extraRenderers: [new CSS2DRenderer()]
    })(elem)
    // .enableNodeDrag(false)
    // .onNodeClick(this.removeNode)
    .graphData({nodes: this.nodes, links: this.links})
    // .dagMode('td')
    // .dagLevelDistance(100)
    .nodeLabel('name')
    .nodeId('url')
    .nodeColor(node => app.highlightNodes.has(node) ? node === app.hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)')
    .linkWidth(link => app.highlightLinks.has(link) ? 4 : 1)
    .linkDirectionalParticles(link => app.highlightLinks.has(link) ? 4 : 0)
    .linkDirectionalParticleWidth(4)
    .onNodeHover(node => {
      // no state change

      if ((!node && !app.highlightNodes.size) || (node && app.hoverNode === node)) return;

      app.highlightNodes.clear();
      app.highlightLinks.clear();
      if (node) {
        //   if (node.neighbors != undefined){
        console.log(node)
        app.highlightNodes.add(node);
        //   node.neighbors.forEach(neighbor => app.highlightNodes.add(neighbor));
        // node.links.forEach(link => app.highlightLinks.add(link));
        //}
      }

      app.hoverNode = node || null;

      app.updateHighlight()
    })
    .onLinkHover(link => {
      app.highlightNodes.clear();
      app.highlightLinks.clear();

      if (link) {
        app.highlightLinks.add(link);
        app.highlightNodes.add(link.source);
        app.highlightNodes.add(link.target);
      }

      app.updateHighlight();
    })
    .nodeAutoColorBy('type')
    // .nodeColor(node => this.selectedNodes.has(node) ? 'rgb(255,0,0,1)' : node.color)
    // .nodeThreeObject(({ url }) => {
    //
    //   // if(url == undefined){
    //   //   url = "root"
    //   // }
    //   if (url != undefined && (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg'))){
    //     const imgTexture = new THREE.TextureLoader().load(`${url}`);
    //     const material = new THREE.SpriteMaterial({ map: imgTexture });
    //     const sprite = new THREE.Sprite(material);
    //     sprite.scale.set(12, 12);
    //     return sprite;
    //   }
    //
    // })
    .nodeThreeObject(node => {
      const nodeEl = document.createElement('div');
      nodeEl.textContent = node.name //node.id;
      nodeEl.style.color = node.color || "#ffffff";
      nodeEl.className = 'node-label';
      return new CSS2DObject(nodeEl);
    })
    .nodeThreeObjectExtend(true)

    .linkThreeObjectExtend(true)
    .linkThreeObject(link => {
      // extend link with text sprite
      if(link.label != undefined){
        const sprite = new SpriteText(`${link.label}`);
        sprite.color = 'lightgrey';
        sprite.textHeight = 1.5;
        return sprite;
      }
    })
    .linkDirectionalArrowLength(3.5)
    .linkDirectionalArrowRelPos(1)
    //  .linkCurvature(0.25)
    .linkPositionUpdate((sprite, { start, end }) => {
      if(sprite != undefined){
        const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
          [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
        })))



        // Position sprite
        Object.assign(sprite.position, middlePos);
      }
    })
    .onNodeClick(node => {
      // Aim at node from outside it
      //  console.log(node)
      this.selectedNodes.clear()
      this.selectedNodes.has(node) ? this.selectedNodes.delete(node) : this.selectedNodes.add(node);
      console.log(this.selectedNodes)
      if(node.url != undefined && node.url.startsWith('http')){
        app.$store.commit ('app/mustExplore', node.url)
      }

      const distance = 160;
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

      this.Graph.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
      );
      app.$store.commit ('app/setCurrentNode', node)
    })
    .onBackgroundClick(event => {
      console.log("onBackgroundClick", event)
    //  app.$store.commit('app/setCurrentNode', null)

    })
    .onBackgroundRightClick(event => {
      console.log("onBackgroundRightClick", event)
       // app.$bvModal.show("modal-node")
    })

    console.log(this.Graph)
    //  console.log(this.Graph.graphData())

    // setInterval(() => {
    //   const { nodes, links } = this.Graph.graphData();
    //   const id = nodes.length;
    //   this.Graph.graphData({
    //     nodes: [...nodes, { id }],
    //     links: [...links, { source: id, target: Math.round(Math.random() * (id-1)) }]
    //   });
    // }, 1000);
  },
  methods:{
    updateHighlight() {
      // trigger update of highlighted objects in scene
      this.Graph
      .nodeColor(this.Graph.nodeColor())
      .linkWidth(this.Graph.linkWidth())
      .linkDirectionalParticles(this.Graph.linkDirectionalParticles());
    },
    async switchBrain(b){
      console.log("switch", b)
      await this.$store.dispatch('nodes/saveNode', b)
      console.log("must save ", this.Graph.graphData())
      let {nodes, links} = this.Graph.graphData()
      for await (const n of nodes){
        console.log(n)
        delete n.__threeObj
        console.log(n)
        await this.$store.dispatch('nodes/saveNode', n)
      }
      console.log(links)
      // for await (const l of links){
      //   console.log(l)
      //   await this.$store.dispatch('nodes/saveNode', n)
      // }

    },
    update(){
      this.Graph.graphData({
        nodes: this.nodes,
        //links: links
        links: this.links //[...links/*, { source: "https://spoggy-test13.solidcommunity.net/", target: f.url }*/]
      })
    },

  },
  watch:{
    graphNeedUpdate(){
      if (this.graphNeedUpdate == true){
        console.log("need update", this.graphNeedUpdate)
        this.Graph.refresh()
        //this.graphNeedUpdate = false
        this.$emit('update', false)
      }
    },
    nodes(){
      //console.log(this.nodes)
      this.update()
    },
    links(){
      //console.log(this.links)
      this.update()
    },
    search(){
      this.highlightNodes.clear()
      if (this.search.length > 0){
        // console.log(this.search)
        this.nodes.forEach(n => {
          if(n.name.includes(this.search)){
            this.highlightNodes.add(n);
            // console.log(this.highlightNodes)
          }
        });


        // app.highlightNodes.add(link.source);

      }
      this.updateHighlight()
    }
    // files(){
    //   const { nodes, links } = this.Graph.graphData();
    //   for (const f of this.files){
    //     //  console.log(f)
    //     //let n = {id: f.url}
    //     //f.id = f.url
    //     try{
    //       this.Graph.graphData({
    //         nodes: [...nodes, f],
    //         links: [...links/*, { source: f.parent, target: f.url }*/]
    //       });
    //     }
    //     catch(e){
    //       console.log(e,f)
    //     }
    //   }
    // },
    // folders(){
    //   const { nodes, links } = this.Graph.graphData();
    //   for (const f of this.folders){
    //     console.log(f)
    //     // f.id = f.url
    //     //  let parent = nodes.find(x=> x.id == f.parent)
    //     //  console.log("parent", parent)
    //
    //     // if (parent == undefined){
    //     //   let parent = {id: f.parent, url : f.parent, name: f.parent}
    //     //   console.log(parent)
    //     //   this.Graph.graphData({
    //     //     nodes: [...nodes, parent],
    //     //  //   links: [...links, { /*source: parent.url, target: f.id*/ }]
    //     //   });
    //     // }
    //     //let n = {id: f.url}
    //     //  if(f.parent != undefined){
    //
    //     try{
    //       this.Graph.graphData({
    //         nodes: [...nodes, f],
    //         //links: links
    //         links: [...links/*, { source: "https://spoggy-test13.solidcommunity.net/", target: f.url }*/]
    //       });
    //       //}
    //       console.log(nodes,links)
    //     }
    //     catch(e){
    //       console.log(e,f)
    //     }
    //   }
    // }
  },
  computed:{
    search:{
      get () { return this.$store.state.app.search },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }

}
</script>

<style>
.node-label {
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.5);
  user-select: none;
}
</style>
