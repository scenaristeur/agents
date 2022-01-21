<template>
  <div>
    <div ref="guiDiv" style="position:absolute; top:500; left:200;z-index:2"></div>
    <div ref="guiProps" style="position:absolute;top:200;left:100;z-index:2"></div>
  </div>
</template>

<script>
import { GUI } from 'dat.gui'
import * as THREE from "three";
import { Factory } from 'neurone-factory'
export default {
  name: "Ui",
  props:['Graph', 'nodes'],

  mounted(){

    //https://sbcode.net/threejs/dat-gui/
    //http://learningthreejs.com/blog/2011/08/14/dat-gui-simple-ui-for-demos/
    // dat.gui https://github.com/dataarts/dat.gui/blob/master/API.md
    // http://stemkoski.github.io/Three.js/#gui

    let guiDiv = this.$refs.guiDiv
    //  console.log(guiDiv)
    this.gui = new GUI(
      {autoPlace: false}
    )
    guiDiv.appendChild(this.gui.domElement);
    // const cameraFolder = gui.addFolder('Camera')
    // cameraFolder.add(camera.position, 'z', 0, 10)
    // cameraFolder.open()
    this.buildGuiTools()
    //this.buildGuiNode()
    //this.buildGuiTest()
  },
  methods:{
    updateNodeFolder(){
      if (this.nodeFolder != null){
        this.gui.removeFolder(this.nodeFolder)
      }
      this.nodeFolder = this.gui.addFolder('Node')
      // console.log(this.nodeFolder)
      console.log(this.currentNode)
      // console.log(this.nodeFolder.__controllers)
      // this.nodeFolder.__controllers.forEach((item) => {
      //   console.log('remove', item)
      //   this.nodeFolder.remove(item)
      // });
      //
      // console.log(this.nodeFolder.__controllers)
      // this.nodeFolder.domElement = ""
      //  Object.assign(this.nodeFolder.__controllers, [])
      //  this.nodeFolder.updateDisplay()
      // this.nodeFolder.remove('name')
      // this.nodeFolder.remove('color')
      // let nameController = new Controller()

      this.nodeFolder.add(this.currentNode, 've:name')
      this.nodeFolder.add(this.currentNode, 've:age')
      this.nodeFolder.add(this.currentNode, 've:type')
      this.nodeFolder.add(this.currentNode, 've:url')
      this.nodeFolder.add(this.currentNode, 've:privacy')
      this.nodeFolder.add(this.currentNode, 've:created')
      const propsFolder = this.nodeFolder.addFolder('Properties')
      const linksFolder = this.nodeFolder.addFolder('Links')

      var lignes = {
        newProperty: this.newProperty,
        newLink: this.newLink,
        message: 'props menu',
        messageLink: 'Link menu',
        speed: 0.8,
      }

      propsFolder.add( lignes, 'newProperty' ).name("New property");
      linksFolder.add( lignes, 'newLink' ).name("New link");


      propsFolder.add(lignes, 'message')
      linksFolder.add(lignes, 'messageLink')
      const testsub = propsFolder.addFolder("sub")
      testsub.add(lignes, "speed", -5, 5)

      // this.nodeFolder.add(this.currentNode, 'url')
      //  this.nodeFolder.add(this.currentNode, 've:created')
      //  this.nodeFolder.add(this.currentNode, 've:color')
      let app = this
      var nodeColor = this.nodeFolder.addColor( this.currentNode, 'color' ).name('Color').listen();
      nodeColor.onChange(function(value) // onFinishChange
      {
        console.log("must update color value", value)
        app.currentNode.color = value //.replace("#", "0x") //);
      });
      this.nodeFolder.open()
    },
    buildGuiNode(){
      var lignes = {
        message: 'props menu',
        messageLink: 'Link menu',
        speed: 0.8,
      }
      this.nodeFolder = this.gui.addFolder('Node')
      const propsFolder = this.nodeFolder.addFolder('Props')
      const linksFolder = this.nodeFolder.addFolder('Links')
      propsFolder.add(lignes, 'message')
      linksFolder.add(lignes, 'messageLink')
      const testsub = propsFolder.addFolder("sub")
      testsub.add(lignes, "speed", -5, 5)
    },
    buildGuiTools(){
      var lignes = {
        // message: 'dat.gui',
        // speed: 0.8,
        // displayOutline: false,
        //color: "#ff0000", // color (change "#" to "0x")
        newNeurone: this.newNeurone,
        resetCamera: this.resetCamera
      };

      const toolFolder = this.gui.addFolder('Tools')

      toolFolder.add( lignes, 'newNeurone' ).name("New neurone");
      toolFolder.add( lignes, 'resetCamera' ).name("Reset camera");
      toolFolder.open()
    },
    buildGuiTest(){
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
      })
      const cube = new THREE.Mesh(geometry, material)
      this.Graph.scene().add(cube)

      var text = {
        message: 'dat.gui',
        speed: 0.8,
        displayOutline: false,
        color: "#ff0000", // color (change "#" to "0x")
        //  newNeurone: this.newNeurone
      };


      const cubeFolder = this.gui.addFolder('Test')
      cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
      cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
      cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
      cubeFolder.add(text, 'message');
      cubeFolder.add(text, 'speed', -5, 5);
      cubeFolder.add(text, 'displayOutline');
      // cubeFolder.add( text, 'newNeurone' ).name("New neurone");
      //cubeFolder.open()

      var cubeColor = cubeFolder.addColor( text, 'color' ).name('Color').listen();
      cubeColor.onChange(function(value) // onFinishChange
      {   cube.material.color.setHex( value.replace("#", "0x") );   });



    },
    newProperty(){
      console.log("newProperty")
    },
    newLink(){
      console.log("newLink")
    },
    newNeurone(){
      console.log("newNeurone")


      let factory = new Factory()
      console.log("Test import neurone-factory ", factory)
      let neurone = factory.create(/*{model: "neurone1"}*/)
      console.log("neurone ", neurone)
      let node = neurone._data
      node['ve:name'] == undefined ? node['ve:name'] = "test" : ""
      node['color'] == undefined ? node['color'] = this.randomColor() : ""
      //  let node = { name: "test", type: undefined, color: this.randomColor() /*"#ffffff"*/}
      this.nodes.push(node)

      this.Graph.graphData({
        nodes: this.nodes,
        //links: links
        links: this.links //[...links/*, { source: "https://spoggy-test13.solidcommunity.net/", target: f.url }*/]
      })
      console.log("should make a node autofocus")
      // const distance = 40;
      // const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
      //
      // this.Graph.cameraPosition(
      //   { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      //   node, // lookAt ({ x, y, z })
      //   3000  // ms transition duration
      // );
    },
    resetCamera(){
      this.Graph.cameraPosition(
        { x: 0, y: 0, z: 40 },
        3000  // ms transition duration
      );
    },
    randomColor() {
      let color = '#'
      for (let i = 0; i < 6; i++){
        const random = Math.random()
        const bit = (random * 16) | 0
        color += (bit).toString(16)
      }
      return color
    }
  },
  watch:{
    currentNode(){
      console.log (this.currentNode)
      this.updateNodeFolder(this.currentNode)
    }
  },
  computed:{
    currentNode:{
      get () { return this.$store.state.app.currentNode },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }

}
</script>

<style>

</style>
