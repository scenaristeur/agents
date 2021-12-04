<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    LOOK at js console to see the agents in action

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import  'evejs/dist/eve.custom.js';
import { AppAgent } from '@/agents/AppAgent.js';
import { HelloAgent } from '@/agents/HelloAgent.js';

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  created(){
    this.agentApp = new AppAgent('agentApp', this);
    console.log(this.agentApp);
    this.agentApp.send('agentApp', {type: 'dispo', name: 'agentGraph' });

    // create two agents
    var agent1 = new HelloAgent('agent1');
    var agent2 = new HelloAgent('agent2');
    console.log(agent1)

    // send a message to agent1
    agent2.send('agent1', 'Hello agent1!');
  }
}
</script>
