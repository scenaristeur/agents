<template>
  <div>
    <b-button @click="addCube">Add</b-button>
  <div ref="canvas"></div>
</div>
</template>

<script>
//https://www.devmachine.fr/three.js/vue.js/2021/01/25/three-with-vue.html
// import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// https://wallsianh.medium.com/what-i-wish-id-known-about-three-js-415e7f655643
// https://github.com/Brick-Walls-Tutorials/three-js-tutorial-part-1/blob/main/main.js
//npm install three and ES6 import it to get started with Three.js
import * as THREE from 'three';

//scene defines relational space that all of our 3D elements will live in
// const scene = new THREE.Scene();
//
// //renderer defines the physical space on screen that will be rendering our 3D meshes and camera views
// const renderer = new THREE.WebGLRenderer();

export default {
  name: "ThreeScene",
  data() {
    return {
      scene: new THREE.Scene(),
      camera: undefined,
      renderer: new THREE.WebGLRenderer(),
      items: []
    };
  },
  mounted(){
    this.init()
  },
  methods: {
    addCube(){
      const geometry = new THREE.BoxGeometry(.5,.5,.5)
      const material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff })
      let cube = new THREE.Mesh(geometry, material)

      //add cube to scene
      this.scene.add(cube)
      cube.position.set(this.randomNumber(-3,3),this.randomNumber(-3,3),this.randomNumber(-3,3))
      this.items.push(cube)
      this.renderScene()
    },
    init(){

      /*
      ADD LINE BELOW to make renderer take up the full screen
      */
      this.renderer.setSize(window.innerWidth, window.innerHeight)

      //REMEMBER to append renderer.domElement, not just renderer
      const canvas = this.$refs.canvas //document.getElementById("canvas")
      canvas.appendChild(this.renderer.domElement)

      //camera defines the perspective from which a scene is view
      //we use a perspective camera here to make obejct size depend on distance
      //the camera constructor takes fov, aspect, near, and far properties
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      //OBJECTS SECTION
      //meshes are made up of a geometry and a material
      const geometry = new THREE.BoxGeometry(1,1,1)
      const material = new THREE.MeshLambertMaterial({color: 0x0000ff})
      let cube = new THREE.Mesh(geometry, material)

      //add cube to scene
      this.scene.add(cube)
this.items.push(cube)
      // change camera position so that we can see the cube
      this.camera.position.set(1,1,1)
      // direct camera at the cube position
      this.camera.lookAt(cube.position)

      // create directional light
      const directionalLight = new THREE.DirectionalLight(0xfffff)
      this.scene.add(directionalLight)
      // change light position
      directionalLight.position.set(3,2,1)

      const directionalLight2 = new THREE.DirectionalLight(0xfff00)
      this.scene.add(directionalLight2)
      // change light position
      directionalLight2.position.set(1,3,1)


        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.minDistance = 2;
        controls.maxDistance = 5;
        // controls.enablePan = false;
        controls.target.set(0, 0, 0);
        controls.addEventListener("change", this.renderScene);

      // animation cycle will recursively call requestAnimationFrame and animate your scene
      this.animate()
    },
    animate(){
      this.renderer.render(this.scene, this.camera)
      for (const cube of this.items){
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01;
      }


      requestAnimationFrame(this.animate)
    },
    renderScene() {
      this.renderer.render(this.scene, this.camera);
    },
    randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
    // init1(){
    //   this.scene = new THREE.Scene();
    //   this.scene.background = null;
    //   this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    //   this.renderer.outputEncoding = THREE.sRGBEncoding;
    //   this.renderer.setPixelRatio(window.devicePixelRatio);
    //   const container = document.getElementById(this.containerId);
    //   this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    //   container.appendChild(this.renderer.domElement);
    //
    //   this.camera = new THREE.PerspectiveCamera(
    //     45,
    //     container.offsetWidth / container.offsetHeight,
    //     0.25,
    //     20
    //   );
    //   this.camera.position.set(this.modelSettings.cameraPosition[0], this.modelSettings.cameraPosition[1], this.modelSettings.cameraPosition[2]);
    //
    //   const controls = new OrbitControls(this.camera, this.renderer.domElement);
    //   controls.minDistance = 2;
    //   controls.maxDistance = 5;
    //   // controls.enablePan = false;
    //   controls.target.set(0, 0, 0);
    //   controls.addEventListener("change", this.renderScene);
    //
    //   const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    //   directionalLight.position.set(0, 1, 0);
    //   directionalLight.castShadow = true;
    //   this.scene.add(directionalLight);
    //   const light = new THREE.PointLight(0xffffcc, 1);
    //   light.position.set(0, 600, 1000);
    //   this.scene.add(light);
    //   const light2 = new THREE.PointLight(0xe6f7ff, 1);
    //   light2.position.set(1000, 200, 0);
    //   this.scene.add(light2);
    //   const light3 = new THREE.PointLight(0xfff2e6, 1);
    //   light3.position.set(0, 200, -1000);
    //   this.scene.add(light3);
    //   const light4 = new THREE.PointLight(0xc4c400, 1);
    //   light4.position.set(-1000, 600, 1000);
    //   this.scene.add(light4);
    //
    //   let loader = new GLTFLoader();
    //   loader.load(
    //     this.modelSettings.link,
    //     data => {
    //       var object = data.scene;
    //       object.position.set(0,0,0);
    //       if(this.modelSettings.scale) object.scale.set(this.modelSettings.scale, this.modelSettings.scale,     this.modelSettings.scale);
    //       this.scene.add(object);
    //       this.renderScene();
    //     }
    //   );
    //
    //
    // }
  }
}
</script>

<style>
body {
  margin: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overscroll-behavior: none;
}
</style>
