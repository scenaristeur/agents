<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    {{session}}
    <small>0.0.1 - gun login</small>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    // 'Login': () => import('@/components/Login'),
    // 'Source': () => import('@/views/Source'),
    // 'Workspaces': () => import('@/views/Workspaces'),
    // 'Synchro': () => import('@/components/Synchro'),
  },
  created(){
  this.$checkSession()
    // not compatible with route.query this.$checkSession()

  },
  mounted(){

  },
  watch:{
    $route(){
      //  console.log(this.$route, to, from)
      if(this.$route.query.source != undefined && this.$route.query.source.length >0){
        this.$processSource(this.$route.query)
      }else{
        this.$store.commit('nodes/setSource', null)
        this.$checkSession()
      }
    }
  },
  computed:{
    session:{
      get () { return this.$store.state.solid.session },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
