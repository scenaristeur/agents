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

    <b-form-textarea
    id="textarea"
    v-model="text"
    placeholder="Enter something..."
    rows="3"
    max-rows="6"
    @input="updateText"
    ></b-form-textarea>
    <GunSignin />
    <GunLogin />
    <div v-if="gunUser!=undefined">
      gunUser {{ gunUser.alias }}
    </div>

    <b-input v-model="speak_text" /><b-button @click="speak">Speak</b-button>
    causette : {{ causette }}
  </div>
</template>

<script>
export default {
  name: "GunTest",
  components: {
    // 'ThreeScene': () => import('@/components/three/ThreeScene'),
    'GunSignin': () => import('@/components/gun/GunSignin'),
    'GunLogin': () => import('@/components/gun/GunLogin'),
    // Hello
    // HelloWorld
  },
  data(){
    return{
      todos : {},
      newDo: "",
      command_input: "",
      last: {key: "", value: ""},
      text: "",
      speak_text: "",
      causette : []
    }
  },
  mounted: function() {
    //  let app = this
    var newline = String.fromCharCode(13, 10);
    // this.todos = this.$gun.get('todos')
    this.$gun.get('RaN5Dom_todos').map().on((node, key) => {

      // add results straight to the Vue component state
      // and get updates when nodes are updated by GUN
      this.todos[key] = node;
      //  console.log(this.todos)
    });

    let rootBrain = {name: 'RaN5Dom_neurones'}
    this.$gunGet(rootBrain)

    this.$gun.get('RaN5Dom_text').once((node) => { // Retrieve the text value on startup
      //console.log(node)
      if (node != undefined){
        this.text = node.text.replaceAll('\\n', newline);
      }

      // if(node == undefined) {
      //   this.$gun.get('text').put({text: "Write the text here"})
      // } else {
      //   console.log("Found Node")
      //   app.text = node.text
      // }
    })

    this.$gun.get('RaN5Dom_text').on((node) => { // Is called whenever text is updated
      console.log("Receiving Update")
      console.log(node)

      this.text = node.text.replaceAll('\\n', newline);
    })

    this.$gun.on('auth', function(u){
      console.log("auth", u)
      //  app.updateSay()
      // this.gunUser.get('said').map().once((say =>
      //   console.log(say)
      // )

      //  );
    });

  },
  methods:{
    speak(){
      console.log("speak_text", this.speak_text)
      if(this.gunUser == undefined){

        alert ("you should 'Gun Login' to speak! ")
        return }
        this.$gun.user().get('said').set(this.speak_text);
        this.speak_text = ""
      },
      add(){
        //  console.log(this.newDo)
        this.$gun.get('RaN5Dom_todos').set({GrosTitre: this.newDo})
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



      },
      updateText(){
        console.log("Updating Text", this.text)
        this.$gun.get('RaN5Dom_text').put({text: this.text}) // Edit the value in our db
      },
      updateSay(){
        let app = this
        this.causette = []
        this.$gun.user().get('said').map().once(say => {
          console.log("SAY", say)
          app.causette.push(say)
        }
      )
    }
  },
  watch:{
    gunUser(){
      console.log("gunUser",this.gunUser)
      if (this.gunUser != undefined){
        this.updateSay()
      }

    }
  },
  computed:{
    gunUser:{
      get () { return this.$store.state.gun.gunUser },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
