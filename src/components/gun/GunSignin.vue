<template>
  <div>
    <b-button v-b-modal.modal-gun-signin>Gun Sign In</b-button>

    <b-modal id="modal-gun-signin" title="Gun Sign In">

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

      <b-button @click="signin">Sign In</b-button>
      <br>
      <b>{{message}}</b>
    </b-modal>
  </div>
</template>

<script>
// import SEA from 'gun/sea'; // Required for SEA functions and user authentication
export default {
  name: "GunSignin",
  data(){
    return {
      username: "",
      passphrase: "",
      message: ""
    }
  },
  async created(){
    // console.log("SEA", SEA)

    //  await this.testSea()
  },
  methods:{
    signin(){
      this.message = ""
      console.log(this.username, this.passphrase)
      var user = this.$gun.user();
      user.create(this.username.trim(), this.passphrase.trim(), this.creationCallback);
      console.log("user",user)
    },
    creationCallback(ack){
      if (ack.err){
        // console.log("creationCallback", ack)
        this.message = "Error : "+ack.err
      }else{
        console.log("ack",ack)
        this.message = "User created"
      }
    },
    // async testSea(){
    //   var pair = await SEA.pair();
    //   var enc = await SEA.encrypt('hello self', pair);
    //   var data = await SEA.sign(enc, pair);
    //   console.log(data);
    //   var msg = await SEA.verify(data, pair.pub);
    //   var dec = await SEA.decrypt(msg, pair);
    //   var proof = await SEA.work(dec, pair);
    //   var check = await SEA.work('hello self', pair);
    //   console.log(dec);
    //   console.log(proof === check);
    //   // now let's share private data with someone:
    //   var alice = await SEA.pair();
    //   var bob = await SEA.pair();
    //   var enc2 = await SEA.encrypt('shared data', await SEA.secret(bob.epub, alice));
    //   await SEA.decrypt(enc2, await SEA.secret(alice.epub, bob));
    //   // `.secret` is Elliptic-curve Diffie–Hellman
    //   // Bob allows Alice to write to part of his graph, he creates a certificate for Alice
    //   var certificate = await SEA.certify(alice.pub, ["^AliceOnly.*"], bob)
    //   // Alice logs in
    //
    //   await this.$gun.user().auth(alice);
    //   // and uses the certificate
    //   await this.$gun.get('~'+bob.pub).get('AliceOnly').get('do-not-tell-anyone').put(enc2, null, {opt: {cert: certificate}})
    //   await this.$gun.get('~'+bob.pub).get('AliceOnly').get('do-not-tell-anyone').once(console.log) // return 'enc'
    //
    // }
  }
}
</script>

<style>

</style>
