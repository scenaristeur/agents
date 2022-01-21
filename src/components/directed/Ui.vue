<template>
  <div>
    <div ref="guiDiv" style="position:absolute; top:500; left:200;z-index:2"></div>
    <div ref="guiProps" style="position:absolute;top:200;left:100;z-index:2"></div>
  </div>
</template>

<script>
import { GUI } from 'dat.gui'
import * as THREE from "three";
export default {
  name: "Ui",
  props:['Graph', 'nodes'],
  mounted(){

    //https://sbcode.net/threejs/dat-gui/
    //http://learningthreejs.com/blog/2011/08/14/dat-gui-simple-ui-for-demos/
    // dat.gui https://github.com/dataarts/dat.gui/blob/master/API.md
    // http://stemkoski.github.io/Three.js/#gui

    let guiDiv = this.$refs.guiDiv
    console.log(guiDiv)
    this.gui = new GUI(
      {autoPlace: false}
    )
    guiDiv.appendChild(this.gui.domElement);



    // const cameraFolder = gui.addFolder('Camera')
    // cameraFolder.add(camera.position, 'z', 0, 10)
    // cameraFolder.open()
    this.buildGuiTools()
    this.buildGuiNode()
    this.buildGuiTest()
  },
  methods:{
    buildGuiNode(){
      var lignes = {
        message: 'props menu',
        messageLink: 'Link menu',
        speed: 0.8,
      }
      const nodeFolder = this.gui.addFolder('Node')
      const propsFolder = nodeFolder.addFolder('Props')
      const linksFolder = nodeFolder.addFolder('Links')
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
        newNeurone: this.newNeurone
      };

      const toolFolder = this.gui.addFolder('Tools')

      toolFolder.add( lignes, 'newNeurone' ).name("New neurone");
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
    newNeurone(){
      console.log("newNeurone")
      let node = { name: "test", type: undefined, color: this.randomColor() /*"#ffffff"*/}
      this.nodes.push(node)

      this.Graph.graphData({
        nodes: this.nodes,
        //links: links
        links: this.links //[...links/*, { source: "https://spoggy-test13.solidcommunity.net/", target: f.url }*/]
      })
      // parameters.x = 0;
      // parameters.y = 30;
      // parameters.z = 0;
      // parameters.color = "#ff0000";
      // parameters.opacity = 1;
      // parameters.visible = true;
      // parameters.material = "Phong";
      // updateCube();
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
  }

}
</script>

<style>

</style>
