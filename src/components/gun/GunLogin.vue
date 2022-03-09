<template>
  <div>
    <b-button v-b-modal.modal-gun-login>Gun Login</b-button>

    <b-modal id="modal-gun-login" title="Gun Login">
      <b-row class="my-1" >
        <b-col sm="3">
          <label for="username"><code>username</code>:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="username" v-model="username" type="text"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1" >
        <b-col sm="3">
          <label for="passphrase"><code>passphrase</code>:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="passphrase" v-model="passphrase" type="password"></b-form-input>
        </b-col>
      </b-row>

      <b-button @click="login">Log In</b-button>
      <b-button @click="leave">Leave</b-button>
      <br>
      <b>{{message}}</b>
    </b-modal>
  </div>
</template>

<script>
import SEA from 'gun/sea'; // Required for SEA functions and user authentication

export default {
  name: "GunLogin",
  data(){
    return {
      username: "",
      passphrase: "",
      message: "",
      user: undefined
    }
  },
  async created(){
    console.log("SEA", SEA)
    this.user = this.$gun.user()

    //console.log("todo change password with user.auth(alias, passphrase, callback, { change: 'new-pass-value' }) https://gun.eco/docs/FAQ#how-can-i-change-a-user-password")
    //  await this.testSea()
  },
  methods:{
    async leave(){
      this.user.leave()
      this.$store.commit('gun/setGunUser', undefined)
    },
    async login(){
      this.message = ""
      //console.log(this.username, this.passphrase)

      await this.user.auth(this.username.trim(), this.passphrase.trim(), this.loginCallback);

    },
    loginCallback(ack){
      console.log("user",this.user, ack)
      if (this.user.is) {
        // console.log('You are logged in');
        this.message = "You are logged in"
        this.$store.commit('gun/setGunUser', this.user.is)
      } else {
        // console.log('You are not logged in');
        this.$store.commit('gun/setGunUser', undefined)
        this.message = "Error : "+ack.err
      }
      // if (ack.err){
      //   // console.log("creationCallback", ack)
      //   this.message = "Error : "+ack.err
      //   //this.$store.commit('gun/setGunUser', "not 2")
      // }else{
      //   console.log("ack",ack)
      //   this.message = "User logged in"
      // }
    },
  }
}
</script>

<style>

</style>
