<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
      <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
    </b-nav-form>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-navbar-brand href="#">Agents</b-navbar-brand>

        <b-nav-item-dropdown :text="mode" right>
          <b-dropdown-item href="#" @click="changeMode('solid')">Solid</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeMode('gun')">Gun</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeMode('ipfs')">Ipfs</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeMode('mld')">M-ld</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">This module is not implemented yet</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>



        <b-nav-item href="#">Help</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name : 'NavBar',
  methods:{
    changeMode(m){
      console.log(m)
      this.$store.commit('app/setMode', m)
    }
  },
  watch:{

  },
  computed:{
    mode:{
      get () { return this.$store.state.app.mode },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
