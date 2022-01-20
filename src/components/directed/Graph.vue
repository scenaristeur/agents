<template>
  <div>
    <div ref="guiDiv" style="position:absolute;top:100;left:100;z-index:2"></div>
    <div ref="graph"></div>

  </div>
</template>

<script>
import { GUI } from 'dat.gui'
//https://github.com/vasturiano/3d-force-graph
import ForceGraph3D from '3d-force-graph';
import SpriteText from 'three-spritetext';
import * as THREE from "three";
export default {
  name: "Graph",
  props:['nodes', 'links'],
  data(){
    return{
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
    this.Graph = ForceGraph3D()(elem)
    // .enableNodeDrag(false)
    // .onNodeClick(this.removeNode)
    .graphData({nodes: this.nodes, links: this.links})
    // .dagMode('td')
    // .dagLevelDistance(100)
    .nodeLabel('name')
    .nodeId('url')
    .nodeAutoColorBy('type')
    .nodeThreeObject(({ url }) => {

      if(url == undefined){
        url = "root"
      }
      if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')){
        const imgTexture = new THREE.TextureLoader().load(`${url}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);
        return sprite;
      }

    })

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
      console.log(node)
      app.$store.commit ('app/mustExplore', node.url)
      const distance = 40;
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

      this.Graph.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
      );
    });

    //  console.log(this.Graph)
    //  console.log(this.Graph.graphData())

    //https://sbcode.net/threejs/dat-gui/
    //http://learningthreejs.com/blog/2011/08/14/dat-gui-simple-ui-for-demos/
    // dat.gui https://github.com/dataarts/dat.gui/blob/master/API.md
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    })
    const cube = new THREE.Mesh(geometry, material)
    this.Graph.scene().add(cube)
    let guiDiv = app.$refs.guiDiv
    console.log(guiDiv)
    const gui = new GUI(
      {autoPlace: false}
    )
    console.log(gui)

    var text = {
      message: 'dat.gui',
      speed: 0.8,
      displayOutline: false,
    };

    guiDiv.appendChild(gui.domElement);
    const cubeFolder = gui.addFolder('Cube')
    cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
    cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
    cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
    cubeFolder.add(text, 'message');
    cubeFolder.add(text, 'speed', -5, 5);
    cubeFolder.add(text, 'displayOutline');
    //cubeFolder.open()
    
    // const cameraFolder = gui.addFolder('Camera')
    // cameraFolder.add(camera.position, 'z', 0, 10)
    // cameraFolder.open()
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
    update(){
      this.Graph.graphData({
        nodes: this.nodes,
        //links: links
        links: this.links //[...links/*, { source: "https://spoggy-test13.solidcommunity.net/", target: f.url }*/]
      })
    }
  },
  watch:{
    nodes(){
      //console.log(this.nodes)
      this.update()
    },
    links(){
      //console.log(this.links)
      this.update()
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

}
</script>

<style>

</style>
