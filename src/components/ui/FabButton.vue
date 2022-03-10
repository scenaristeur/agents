<template>
  <vue-fab
  :mainBtnColor="mainBtnColor">
  <fab-item
  v-for="(item, idx) in menu"
  :key="idx"
  :idx="idx"
  :title="item.title"
  :color="item.color"
  :icon="item.icon"
  @clickItem="clickItem" />
</vue-fab>
</template>

<script>
export default {
  name: 'FabButton',
  data(){
    return {
      // icons https://fonts.google.com/icons?selected=Material+Icons
      menu: [
        {
          icon: 'public',
          title: 'Worlds',
          color: '#ff9900'
        },
        {
          icon: 'toc',
          title: 'gun refactoring',
          color: '#999',
          world: 'gun'
        },
        {
          icon: 'toc',
          title: 'solid refactoring',
          color: '#999',
          world: 'solid'
        },
        {
          icon: 'toc',
          title: 'ipfs todo',
          color: '#999'
        },
        {
          icon: 'toc',
          title: 'm-ld todo',
          color: '#999'
        },
        {
          icon: 'add_a_photo',
          title: 'Add a Photo',
          color: '#999'
        }
      ],
      mainBtnColor: '#3eaf7c'
    }
  },
  methods:{
    clickItem(item) {
      let choice = this.menu[item.idx]
      console.log(choice.world)
      this.$store.commit('app/setWorld', choice.world)
      alert(item.idx)
    },
  }
}
</script>

<style>

</style>
