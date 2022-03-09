world<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
      <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
    </b-nav-form>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-navbar-brand href="#">Agents</b-navbar-brand>

        <b-nav-item-dropdown :text="world || 'World'" right>
          <b-dropdown-item href="#" @click="changeWorld('solid')">solid</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeWorld('gun')">gundb</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeWorld('ipfs')" disabled>ipfs</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeWorld('mld')" disabled>m-ld</b-dropdown-item>
        </b-nav-item-dropdown>

        <SolidLogin v-if="world == 'solid'" />
        <b-nav-dropdown v-else-if="world == 'gun'" text="Gun User" >
          <div v-if="gunUser!=undefined">
            gunUser : {{ gunUser.alias }}
          </div>
          <GunSignin />
          <GunLogin />

        </b-nav-dropdown>

        <b-nav-item-dropdown  v-else right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile {{ world }}</b-dropdown-item>

          <b-dropdown-item href="#">Sign In/Out {{ world }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#" disabled>This module is not implemented yet</b-dropdown-item>
          <b-dropdown-item href="#" disabled>EN</b-dropdown-item>
          <b-dropdown-item href="#" disabled>FR</b-dropdown-item>
          <b-dropdown-item href="#" disabled>ES</b-dropdown-item>
          <b-dropdown-item href="#" disabled>RU</b-dropdown-item>
          <b-dropdown-item href="#" disabled>FA</b-dropdown-item>
        </b-nav-item-dropdown>



        <b-nav-item href="https://github.com/scenaristeur/agents/blob/main/README.md" target="_blank">Help</b-nav-item>

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
  methods:{
    changeWorld(w){
      console.log(w)
      this.$store.commit('app/setWorld', w)
    },

  },
  watch:{

  },
  computed:{
    world:{
      get () { return this.$store.state.app.world },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    gunUser:{
      get () { return this.$store.state.gun.gunUser },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
