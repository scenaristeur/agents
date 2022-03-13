<template>
  <div>
    <span v-if="header == 'tutorial'">
      Welcome to the new 'Agents' world,<br> where everyone and anything is considered as an autonomous intelligent 'Agent'.<br>
      Please choose a world to start by clicking on a node.
      <b-button @click= 'header=null'>close</b-button>

      <WorldChoose />
    </span>

  </div>
</template>

<script>
export default {
  name: "AppHeader",
  components: {
    'WorldChoose': ()=>import('@/components/ui/WorldChoose')
  },
  computed:{
    header:{
      get () { return this.$store.state.app.header },
      set (value) { this.$store.commit('app/setHeader',value) }
    },
  }
}
</script>

<style>

</style>
