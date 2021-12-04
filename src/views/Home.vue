<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import  'evejs/dist/eve.custom.js';
import { AppAgent } from '@/agents/AppAgent.js';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
     this.agentApp = new AppAgent('agentApp', this);
     console.log(this.agentApp);
     this.agentApp.send('agentApp', {type: 'dispo', name: 'agentGraph' });
  }
}
</script>
