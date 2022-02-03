<template>
  <b-input-group>
        <b-form-input
        id="input"
        ref="input"
        autofocus
        v-model="main_input"
        v-on:keyup.enter="onEnter"
        @keyup="search"
        title="type three words followed by a comma"
        placeholder="/h + Enter for help"></b-form-input>


      <template #append>
          <!-- <NetworkToolBar /> -->
      </template>
    </b-input-group>
</template>

<script>
import { Command , /* Brain, Graph*/ } from 'neurone-factory'

export default {
name: "CommandInput",
components: {
  // 'NetworkToolBar': () => import('@/components/network/NetworkToolBar'),
},
data() {
  return {
    main_input: "",
    commandHistory: []
  }
},
methods: {
  search(){
    let s = this.$refs.input.value
    this.$store.commit('app/setSearch', s)
  },
  onEnter(){
    console.log(this.main_input)
    let inputValue = this.main_input.trim()
    if (inputValue.length > 0){
      let inputObject = new Command({inputValue: inputValue})
    //  var inputObject = this.getInputType(inputValue)
      console.log("inputObject",inputObject);
      //  this.traiteInput(inputObject);
      //  this.updateInput(inputObject.inputNew);
      // this.$emit('onCommand', inputObject)
      this.$store.commit('app/setInputObject', inputObject)
      this.main_input = inputObject.inputNew
    }
  },
}
}
</script>

<style>

</style>
