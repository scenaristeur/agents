<template>
  <div class="container">
    <!-- <p class="my-4">Hello from modal!</p>-->
    <!-- Current Node : {{ currentNode}}
    <br> -->
    <b-button size="sm" @click="currentNode = null">Close</b-button>
    navigation : {{ navigation }} - node type : {{currentNode.type}}

    <BrainNode v-if="node.type == 'world'" />
    <NodePreview v-else :node="currentNode"/>
    <br>

    todo put the following in a decent neurone module :
    <b-container>

      <b-row>
        <b-col sm="3">
          <label for="name">Name:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="name" v-model="node.name" autocomplete="off" autofocus />
        </b-col>
        <b-col sm="3">
          <label for="age"><code>Age</code>:</label>
        </b-col>
        <b-col>
          <b-form-input
          id="age"
          v-model="node.age"
          required type="number"  />
        </b-col>
      </b-row>


      <b-row v-for="p in node.properties" :key="p.name">
        <b-col sm="3">
          <label for="name"><code>{{p.name}}</code>:</label>
        </b-col>
        <b-col sm="9">

          <!-- <b-button-toolbar key-nav aria-label="Toolbar with button groups">
          <b-dropdown size="sm" class="mx-1" right text="+" variant="outline-primary">
          <b-dropdown-item @click="fieldType = 'text'">Text</b-dropdown-item>
          <b-dropdown-item @click="fieldType = 'textarea'">Textarea</b-dropdown-item>
          <b-dropdown-item @click="fieldType = 'node'">Node</b-dropdown-item>
          <b-dropdown-item @click="fieldType = 'link'">Link</b-dropdown-item>
        </b-dropdown>
      </b-button-toolbar> -->
      <b-button @click="showFieldModal(p)" variant="outline-primary">+</b-button>
      <!-- {{ p.values}} -->

      <Values :values="p.values" />

      <!-- <b-form-input id="name" v-model="node.name" required /> -->
    </b-col>
  </b-row>

  <b-row v-if="field != null" class="mt-3">
    <b-col sm="3">
      <b-form-input @change="fieldNameChanged" v-model="field.name" required placeholder="property name" />
    </b-col>
    <b-col sm="9">
      <b-button variant="outline-secondary" size="sm" @click="clear_field">X</b-button>
    </b-col>
  </b-row>

  <b-row>
    <b-col>
    </b-col>
    <b-col>
      <b-btn variant="outline-primary" size="sm" @click="add">+ add a property or a link</b-btn>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <!-- <b-button  :variant="node.privacy == 'public' ? 'warning' : 'outline-success'"
      @click="node.privacy = node.privacy == undefined || node.privacy == 'public' ? 'private' : 'public'">
      {{node.privacy}}</b-button> -->

      <b-btn variant="success" @click="save">Save Node</b-btn>
      <Permissions
      :permissions="permissions"
      :url="node.url"
      :autorized="autorized" />
    </b-col>
  </b-row>

  <b-modal id="fieldModal" size="xl" :title="node.name+' -> '+currentProp.name">
    <!-- {{ currentProp}} -->
    <b-tabs content-class="mt-3">
      <b-tab title="text" active @click="fieldType = 'text'">
        <b-form-input
        v-model="newvalue"
        placeholder="new value"
        @change="addNewValue"/>
      </b-tab>
      <b-tab title="textarea" @click="fieldType = 'textarea'">
        <b-form-textarea
        v-model="newvalue"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        @change="addNewValue"
        ></b-form-textarea>
      </b-tab>
      <b-tab title="node" @click="fieldType = 'node'">
        <NodeSelector :currentProp.sync="currentProp"/>
      </b-tab>
      <b-tab title="link" @click="fieldType = 'link'">
        <b-form-input
        v-model="link.name"
        placeholder="name"
        />
        <b-form-input
        v-model="link.href"
        placeholder="link"
        @change="addNewLink"/>
      </b-tab>
      <!-- <b-tab title="tiny" @click="fieldType = 'tiny'">
      <editor
      v-model="tinycontent"
      :init="{
      height: 500,
      menubar: false,
      plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
      ],
      toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
    }"
    />
  </b-tab> -->
</b-tabs>
</b-modal>

</b-container>
<b-container v-if="currentNode.type == 'html'">

  <!-- <Quasar /> -->
  <CKWysiwyg />
</b-container>

</div>
</template>

<script>
import { Neurone , /* Brain, Graph*/ } from '@/neurone-factory'
export default {
  name: "Node",
  components: {
    'NodeSelector': () => import('@/components/ui/node/NodeSelector'),
    // 'NodeLite': () => import('@/components/NodeLite'),
    'Values': () => import('@/components/ui/node/Values'),
    'Permissions': () => import('@/components/ui/node/Permissions'),
    // 'Quasar': () => import('@/views/Quasar'),
    'CKWysiwyg': () => import('@/components/ui/node/CKWysiwyg'),
    'NodePreview': () => import('@/components/ui/node/NodePreview'),
    'BrainNode': () => import('@/components/ui/node/BrainNode'),
    // 'editor': Editor
  },
  data() {
    return {
      node:null,
      field : null,
      clearing: false,
      fieldType: "text",
      show: false,
      currentProp: {},
      newvalue: null,
      link: {},
      // privacy: "private",
      permissions: null
      // tinycontent: ""
    }
  },
  async created() {
    this.node = this.$store.state.app.currentNode != null ? this.$store.state.app.currentNode :  new Neurone(
      {
        //  blip: "blop",
        //  color: this.randomColor(),
        name: "", //"name for graph_"+this.nodes.length,
        age: 0,
        type: "neurone"
      }
    )
    console.log("neurone ", this.node)

    await this.getPermissions()
    // if(this.$route.params.node) {
    //   this.node = this.$route.params.node;
    // } else {
    //   this.node = { name:'', age: 0 , properties: []};
    // }
  },
  methods: {
    async save() {
      await this.$store.dispatch('nodes/saveNode', this.node);
      // virer ce doublon !!!!!!!!!!!!!!!
      this.$store.commit('nodes/setCurrentNode', null)
      this.$store.commit('app/setCurrentNode', null)
      // this.$router.push('/');
      alert("node saved")
    },
    add(){
      this.field = {name: ""}
    },
    fieldNameChanged(field_name){
      console.log(field_name)
      if(this.clearing == false){
        let p = {name: field_name, values: []}
        this.node.properties == undefined ? this.node.properties = [] : ""
        var index = this.node.properties.findIndex(x => x.name==p.name);
        index === -1 ? this.node.properties.push(p) : alert(p.name+" already exist")
      }
    },
    clear_field(){
      this.clearing = true
      this.field = null
      this.clearing = false
    },
    showFieldModal(p){
      console.log(p)
      this.fieldType= "text"
      this.currentProp = p
      this.$bvModal.show("fieldModal")
    },
    addNewValue(){
      let val = {value: this.newvalue,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.newvalue = null
    },
    addNewLink(){
      //console.log(this.link)
      let val = {value: this.link,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.link = {}
    },
    async getPermissions(){
      this.permissions = this.node.url != undefined ? await this.$getPermissions(this.node) : null
      console.log("PERMISSIONS", this.permissions)
    }
  },
  watch:{
    currentNode(){
      console.log("CURRENT NODE Changed")
      this.getPermissions()
    }
    // tinycontent(){
    //   console.log(this.tinycontent)
    // }
  },
  computed:{
    currentNode:{
      get () { return this.$store.state.app.currentNode },
      set (value) { this.$store.commit('app/setCurrentNode',value) }
    },
    navigation:{
      get () { return this.$store.state.app.navigation },
      set (value) { this.$store.commit('app/setNavigation',value) }
    },
    autorized() {
      if(this.permissions == null){
        return false
      }else{
        return this.permissions.user.append == true ||
        this.permissions.user.write == true ||
        this.permissions.public.append == true ||
        this.permissions.public.write == true
      }
    },
  }
}
</script>

<style>

</style>
