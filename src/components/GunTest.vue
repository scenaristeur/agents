<template>
  <div>
    Gun test
    <b-input v-model="newDo" />
    <b-button @click="add">Add</b-button>
    <!-- todos : {{ todos }} -->
  <ul>
<li v-for="(node, key) of todos" :key="key"> {{ key }} : {{node.title || node.GrosTitre}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "GunTest",
  data(){
    return{
      todos : {},
      newDo: ""
    }
  },
  mounted: function() {
    // this.todos = this.$gun.get('todos')
    this.$gun.get('todos').map().on((node, key) => {

      // add results straight to the Vue component state
      // and get updates when nodes are updated by GUN
      this.todos[key] = node;
      console.log(this.todos)
    });
  },
  methods:{
    add(){
      console.log(this.newDo)
      this.$gun.get('todos').set({GrosTitre: this.newDo})
      this.newDo = ""
    }
  }
}
</script>

<style>

</style>
