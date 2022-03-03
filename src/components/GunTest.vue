<template>
  <div>
    Gun test
    <b-input @change="command()" v-model="command_input" placeholder="type a command and press enter" />
    <h3>Some possible commands</h3>
    <ul>
      <li>my.object.name = truc</li>
      <li>cat my.object.name</li>
      <li>my.object.test = {"og": "gro", "trif": "gr", "gft": 5}</li>
      <li>cat my.object.test.og</li>
    </ul>

    Result : {{last}}

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
      newDo: "",
      command_input: "",
      last: {key: "", value: ""}
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
    },
    command(){
      let command = {}
      command.fullCommand = this.command_input.trim()
      command.commandArray = command.fullCommand.split(" ")
      command.first = command.commandArray[0]
      console.log("command", command)
      if(command.commandArray[1] == '='){
        this.set(command)
      }
      if(command.commandArray[0] == 'cat'){
        this.cat(command)
      }
      this.command_input = ""
    },


    cat(command){
      let app = this
      let object = command.commandArray[1]

      console.log("lecture de ", object )
      let path = object.split('.')
      let currentNode = undefined
      for (const p of path){
        console.log(p)
        currentNode = currentNode == undefined ?  this.$gun.get(p) : currentNode.get(p)
        console.log("current",currentNode)
      }
      currentNode.once(function(data, key){
        console.log( key, data);
        console.log('the value is', data)
        app.last.key = key,
        app.last.value = data
      });

    },

    set(command/*, overwrite = true*/){
      let object = command.commandArray[0]
      // remove object & equal sign
      command.commandArray.splice(0, 2)
      let value = command.commandArray.join(' ')
      console.log("affectation de ", value , "dans", object )
      let path = object.split('.')
      let currentNode = undefined
      for (const p of path){
        console.log(p)
        currentNode = currentNode == undefined ?  this.$gun.get(p) : currentNode.get(p)
        console.log("current",currentNode)
      }
      currentNode.once(function(data, key){
        console.log( key, data);
        console.log('the value is', data)
      });

      try {
        value = JSON.parse(value)
      }catch(e){
        console.log(e)
      }
      finally{
        currentNode.put(value);
      }



    }
  }
}
</script>

<style>

</style>
