<template>
  <div>
    <h1>world node : {{currentNode.name}}</h1>
    <b>id :</b> {{currentNode.id}}<br>
    <b>type :</b> {{currentNode.type}} | <b>status :</b> {{currentNode.status}}<br>
    <b>description :</b> {{currentNode.description}}<br>
    img, links...

    <hr>
    <div v-if="currentNode.id == 'gun'">
      To explore a gun brain you had to specify the rootNode you want to explore.<br>




    </div>

    <div v-if="currentNode.id == 'solid'">
      You can login to explore your Pod and your friend's pods or you can explore by url.<br>
      <b-row><SolidLogin /></b-row>
    </div>

    <hr>

    <b-row>
      <b-col class="col-10 col-md-6 ">
        <b-input v-model="rootNode" placeholder="type the rootNode + Enter" v-on:keyup.enter="rootNodeChanged"/>
      </b-col>
      <b-col>
        <b-button @click="rootNodeChanged" variant="primary">Explore</b-button>
      </b-col>
    </b-row>

    <hr>

    <!-- {{currentNode}} -->
  </div>
</template>

<script>
export default {
  name: 'BrainNode',
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin'),
  },
  data(){
    return{
      rootNode: "",
      //url : "https://spoggy-test6.solidcommunity.net/public/",
      //url: "https://spoggy-test5.solidcommunity.net/public/neurones",
      //url:'https://data.virtual-assembly.org/',
      //url:'https://data.gl.flod.io/',
    }
  },
  created(){
    this.rootNode = this.$store.state.app.currentNode.examples[0].value
  },
  methods: {
    rootNodeChanged(){
      let node = {id: this.rootNode, name: this.rootNode, type: 'brain'}
      //this.currentNode.brains == undefined ? this.currentNode.brains = [] : ""
      console.log(this.rootNode)
      switch (this.currentNode.id) {
        case 'solid':
        this.$store.commit('app/mustExplore', this.rootNode)
        break;
        case 'gun':
        //this.currentNode.brains.push(node)
        // this.$gunExplore(this.rootNode)
        this.$store.commit('app/setCurrentNode', null)
        this.$store.commit('app/setGunNode', node)
        break;
        default:

      }
    }
  },
  watch:{
    currentNode(){
      this.rootNode = this.$store.state.app.currentNode.examples[0].value
    }
  },
  computed:{
    currentNode:{
      get () { return this.$store.state.app.currentNode },
      set (value) { this.$store.commit('app/setCurrentNode',value) }
    },
  }
}
</script>

<style>

</style>
