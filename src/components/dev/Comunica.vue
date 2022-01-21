<template>
  <div>
    comunica
  </div>
</template>

<script>
import * as Comunica from '@comunica/actor-init-sparql'

console.log(Comunica)

export default {
  name: "Comunica",
  created(){
    console.error("This is not an error ! HEHEHE, See Test Communica lib in src/components/dev/Comminica.vue")
  //  this.testCommunica()
  },
  methods:{
    testCommunica(){
      //   let query = `
      //   SELECT * {
      //     ?s ?p <http://dbpedia.org/resource/Belgium>.
      //     ?s ?p ?o
      //   } LIMIT 100
      // `

      let query = `
      SELECT * {
        ?s ?p ?o
      } LIMIT 100
      `

      Comunica.newEngine().query(query, {
        sources: [
          // 'http://fragments.dbpedia.org/2015/en',
          'https://data.virtual-assembly.org/',
          'https://data.gl.flod.io/',
        ],
      }).then(function (result) {
        result.bindingsStream.on('data', function (data) {
          // Each variable binding is an RDFJS term
          console.log(data.get('?s').value + ' ' + data.get('?p').value + ' ' + data.get('?o').value);
        });
      });
    }
  }
}
</script>

<style>

</style>
