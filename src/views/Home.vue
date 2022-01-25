<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <!-- LOOK at js console to see the agents in action<br> -->

    <Visu />
    <vue-fab
    :mainBtnColor="mainBtnColor">
    <fab-item
    v-for="(item, idx) in menu"
    :key="idx"
    :idx="idx"
    :title="item.title"
    :color="item.color"
    :icon="item.icon"
    @clickItem="clickItem" />
  </vue-fab>
  <b-row>
    <b-col>
      <Login />
    </b-col>
    <b-col class="col-10 col-md-6 ">
      <b-form-input v-model="url" placeholder="pod url" @change="onChange"></b-form-input>
    </b-col>
    <b-col>
      <b-button @click="onChange" variant="primary">Explore</b-button>
    </b-col>
  </b-row>
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
    'Login': () => import('@/components/Login'),
    // 'ThreeScene': () => import('@/components/three/ThreeScene'),
    'Visu': () => import('@/components/directed/Visu'),
    // HelloWorld
  },
  data(){
    return {
      // url : "https://spoggy-test6.solidcommunity.net/public/",
      url: "https://spoggy-test5.solidcommunity.net/public/neurones",
      //  url:'https://data.virtual-assembly.org/',
      //url:'https://data.gl.flod.io/',
      menu: [
        {
          icon: 'done',
          title: 'good job!',
          color: '#ff9900'
        },
        {
          icon: 'toc',
          title: '',
          color: '#999'
        }
      ],
      mainBtnColor: '#3eaf7c'
    }
  },
  created(){
    this.$store.dispatch('nodes/getNodes');
    // let brain = new Brain()
    // console.log("Test import neurone-factory ", brain)

    // this.agentApp = new AppAgent('agentApp', this);
    // console.log(this.agentApp);
    // //this.agentApp.send('agentApp', {type: 'dispo', name: 'agentGraph' });
    //
    // // create two agents
    // this.agent1 = new HelloAgent('agent1');
    // this.agent2 = new HelloAgent('agent2');
    // this.sniffer1 = new SnifferAgent('sniffer1');
    //
    // console.log(this.agent1)
    //
    // // send a message to agent1
    // this.agent2.send('agent1', 'Hello agent1!');

    //this.agent2.send('https://scenaristeur.github.io/agents/agent1', 'Hello REMOTE AGENT1')
  },
  methods:{
    clickItem: function (item) {
      window.alert(item.idx)
    },
    async onChange(){
      console.log(this.url)
      this.$store.commit('app/mustExplore', this.url)
      // let resources = await this.$getResources(this.url)
      // resources.unshift({url: this.url, name: "ROOT", parent: null })

      // for (const r of resources){
      //   console.log(r.url)
      //   if (r.type == "folder"){
      //     r.resources = await this.$getResources(r.url)
      //   }
      // }
      //  console.log(resources)
      //  this.agentApp.send('sniffer1', {url : this.url});
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
