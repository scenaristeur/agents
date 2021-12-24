<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <!-- LOOK at js console to see the agents in action<br> -->
    <b-row>
      <b-col>
        <Login />
      </b-col>
      <b-col class="col-12 col-md-8 ">
        <b-form-input v-model="url" placeholder="pod url" @change="onChange"></b-form-input>
      </b-col>
      <b-col>
        <b-button @click="onChange" variant="primary">Explore</b-button>
      </b-col>
    </b-row>
    <Visu />
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
      url : "https://spoggy-test6.solidcommunity.net/public/",
      //  url:'https://data.virtual-assembly.org/',
      //url:'https://data.gl.flod.io/'
    }
  },
  created(){
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
  computed:{
    files:{
      get () { return this.$store.state.app.files },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    folders:{
      get () { return this.$store.state.app.folders },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }
}
</script>
