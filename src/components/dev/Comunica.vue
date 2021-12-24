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
  Comunica.newEngine().query(`
  SELECT * {
    ?s ?p <http://dbpedia.org/resource/Belgium>.
    ?s ?p ?o
  } LIMIT 100
`, {
  sources: ['http://fragments.dbpedia.org/2015/en'],
}).then(function (result) {
  result.bindingsStream.on('data', function (data) {
    // Each variable binding is an RDFJS term
    console.log(data.get('?s').value + ' ' + data.get('?p').value + ' ' + data.get('?o').value);
  });
});
}
}
</script>

<style>

</style>
