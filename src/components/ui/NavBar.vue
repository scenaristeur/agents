<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
      <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
    </b-nav-form>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-navbar-brand href="/">Agents</b-navbar-brand>
        <b-nav-item-dropdown :text="world == null ? 'World' : world.id" right>
          <b-dropdown-item v-for="w in worlds"
          :key="w.id"
          @click="changeWorld(w)"
          :disabled="w.status != 'enabled'"
          >{{w.name}}
          <small v-if="w.status != 'enabled'"><i>{{w.status}}</i></small>
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <div v-if="world != null">
        <SolidLogin v-if="world.id == 'solid'" />
        <b-nav-dropdown v-else-if="world.id == 'gun'" text="Gun User" >
          <div v-if="gunUser!=undefined">
            gunUser : {{ gunUser.alias }}
          </div>
          <GunSignin />
          <GunLogin />
          <b-dropdown-item-button>Leave</b-dropdown-item-button>
        </b-nav-dropdown>


        <!-- <b-nav-item-dropdown right>
        <template #button-content>
        <em>User</em>
      </template>
      <b-dropdown-item href="#">Profile {{ world.id }}</b-dropdown-item>

      <b-dropdown-item href="#">Sign In/Out {{ world.id }}</b-dropdown-item>
    </b-nav-item-dropdown> -->
  </div>


  <!-- <b-nav-item-dropdown
  :text="navigation || 'Navigation'"
  block
  menu-class="w-100"> -->
  <b-dropdown :text="navigation || 'Navigation'">
    <b-dropdown-item @click="changeNavigation('preview')"><u>P</u>review</b-dropdown-item>
    <b-dropdown-item @click="changeNavigation('create')"><u>C</u>reate</b-dropdown-item>
    <b-dropdown-item @click="changeNavigation('edit')"><u>E</u>dit</b-dropdown-item>
    <b-dropdown-item @click="changeNavigation('explore')">e<u>X</u>plore</b-dropdown-item>
    <b-dropdown-item @click="changeNavigation('collapse')">c<u>O</u>llapse</b-dropdown-item>
    <!-- <b-dropdown-item href="#" @click="changeNavigation('explore')">explore</b-dropdown-item> -->
    <b-dropdown-item @click="changeNavigation('select')"><u>S</u>elect</b-dropdown-item>
    <!-- <b-dropdown-item href="#" @click="changeWorld(null)" >none</b-dropdown-item> -->
    <b-dropdown-divider></b-dropdown-divider>

    <b-dropdown-header>Show nodes / names or both</b-dropdown-header>
    <b-dropdown-form>
      <b-form-radio-group v-model="showNodeName">

        <b-form-radio value="node">nodes</b-form-radio>
        <b-form-radio value="names">names</b-form-radio>
        <b-form-radio value="both">both</b-form-radio>
      </b-form-radio-group>
      <!-- <b-form-checkbox v-model="showNodeName" class="mb-3">Show node name</b-form-checkbox> -->
      <!-- <b-button variant="primary" diasbled>test</b-button> -->
    </b-dropdown-form>
  </b-dropdown>

  <!-- </b-nav-item-dropdown> -->


  <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
</b-navbar-nav>

<!-- Right aligned nav items -->
<b-navbar-nav class="ml-auto">


  <b-nav-item-dropdown text="Lang" right>
    <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
    <b-dropdown-item href="#">ES</b-dropdown-item>
    <b-dropdown-item href="#">RU</b-dropdown-item>
    <b-dropdown-item href="#">FA</b-dropdown-item> -->
    <b-dropdown-item @click="localeChange('en')">EN</b-dropdown-item>
    <b-dropdown-item @click="localeChange('fr')">FR</b-dropdown-item>
    <b-dropdown-item @click="localeChange('ja')">JA</b-dropdown-item>
    <b-dropdown-item @click="localeChange('de')">DE</b-dropdown-item>
    <b-dropdown-item @click="localeChange('es')">ES</b-dropdown-item>
    <b-dropdown-item @click="localeChange('ru')">RU</b-dropdown-item>
    <b-dropdown-item to="/translation">Translate to your language</b-dropdown-item>
  </b-nav-item-dropdown>


  <b-nav-item-dropdown text="Help" right>
    <b-dropdown-item href="https://github.com/scenaristeur/agents/blob/main/README.md" target="_blank">Help</b-dropdown-item>
    <b-dropdown-item @click="openTutorial">Tutorial</b-dropdown-item>
    <b-dropdown-item @click="degug">Debug</b-dropdown-item>
  </b-nav-item-dropdown>


</b-navbar-nav>
</b-collapse>
</b-navbar>
</template>

<script>
export default {
  name : 'NavBar',
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin'),
    'GunSignin': () => import('@/components/gun/GunSignin'),
    'GunLogin': () => import('@/components/gun/GunLogin'),
  },
  data(){
    return{
      showNodeName : 'both'
    }
  },
  methods:{
    changeWorld(w){
      console.log(w)
      this.$store.commit('app/setCurrentNode', w)
      // this.$store.commit('app/setWorld', w)
    },
    changeNavigation(n){
      console.log(n)
      this.$store.commit('app/setNavigation', n)
    },
    localeChange(loc){
      this.$i18n.locale = loc
    },
    openTutorial(){
      this.$store.commit('app/setHeader', 'tutorial')
    },
    debug(){
      alert('not implemented yet')
    }

  },
  watch:{
    showNodeName(){
      console.log("showNodeName", this.showNodeName)
    }
  },
  computed:{
    world:{
      get () { return this.$store.state.app.world },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    navigation:{
      get () { return this.$store.state.app.navigation },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    gunUser:{
      get () { return this.$store.state.gun.gunUser },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    worlds:{
      get () { return this.$store.state.app.worlds },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
