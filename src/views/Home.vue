<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <!-- LOOK at js console to see the agents in action<br> -->
    <NavBar />
    <AppHeader />
    <Visu />
    <FabButton />
    <b-row>
      <b-col>

      </b-col>
      <b-col class="col-10 col-md-6 ">
        <b-form-input v-model="url" placeholder="pod url" @change="onChange"></b-form-input>
      </b-col>
      <b-col>
        <b-button @click="onChange" variant="primary">Explore</b-button>
      </b-col>
    </b-row>

    <GunTest />
    <!-- <vue-fab mainBtnColor="#3599DB">
    <fab-item @clickItem="clickItem" :idx="0" title="add" icon="add" />
    <fab-item @clickItem="clickItem" :idx="1" title="https" icon="https" />
    <fab-item @clickItem="clickItem" :idx="2" title="edit" icon="edit" />
  </vue-fab> -->
  <!-- <ThreeScene :files="files"/> -->
  {{ files}}
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import  'evejs/dist/eve.custom.js';
// import { AppAgent } from '@/agents/AppAgent.js';
// import { HelloAgent } from '@/agents/HelloAgent.js';
// import { SnifferAgent } from '@/agents/SnifferAgent.js';

// import { Brain } from 'neurone-factory'

export default {
  name: 'Home',
  components: {
    // 'Login': () => import('@/components/Login'),
    // 'ThreeScene': () => import('@/components/three/ThreeScene'),
    'Visu': () => import('@/components/directed/Visu'),
    'GunTest': () => import('@/components/GunTest'),
    'FabButton': ()=>import('@/components/ui/FabButton'),
    'NavBar': ()=>import('@/components/ui/NavBar'),
    'AppHeader': ()=>import('@/components/ui/AppHeader')

    // HelloWorld
  },
  data(){
    return {
      //url : "https://spoggy-test6.solidcommunity.net/public/",
      url: "https://spoggy-test5.solidcommunity.net/public/neurones",
      //url:'https://data.virtual-assembly.org/',
      //url:'https://data.gl.flod.io/',
    }
  },
  created(){
    this.$store.dispatch('nodes/getNodes');
  },
  methods:{
    async onChange(){
      console.log(this.url)
      this.$store.commit('app/mustExplore', this.url)
    }
  },
  watch:{
    nodes(){
      console.log("local nodes", this.nodes)
    }
  },
  computed:{
    files:{
      get () { return this.$store.state.app.files },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    folders:{
      get () { return this.$store.state.app.folders },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    nodes:{
      get () { return this.$store.state.nodes.nodes },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }
}
</script>
