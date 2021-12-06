<template>
  <div>
    <div ref="graph"></div>
  </div>
</template>

<script>
//https://github.com/vasturiano/3d-force-graph
import ForceGraph3D from '3d-force-graph';
export default {
  name: "Graph",
  mounted() {
    const N = 300;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id-1))
      }))
    };

    const graph = ForceGraph3D()
    graph(this.$refs.graph)
    .graphData(gData);
  }
}
</script>

<style>

</style>
