<template>
  <div>
    <div ref="graph"></div>
    folders : {{folders.length}}, files : {{files.length}}
  </div>
</template>

<script>
//https://github.com/vasturiano/3d-force-graph
import ForceGraph3D from '3d-force-graph';
export default {
  name: "Graph",
  props:['folders', 'files'],
  data(){
    return{
      initData: {
        nodes: [ {id: "https://spoggy-test13.solidcommunity.net/", url: "https://spoggy-test13.solidcommunity.net/", name: "ROOT", color: "#ff0000" } ],
        links: []
      }
    }
  },
  mounted() {
    // const N = 300;
    // const gData = {
    //   nodes: [...Array(N).keys()].map(i => ({ id: i })),
    //   links: [...Array(N).keys()]
    //   .filter(id => id)
    //   .map(id => ({
    //     source: id,
    //     target: Math.round(Math.random() * (id-1))
    //   }))
    // };
    let elem = this.$refs.graph
    this.Graph = ForceGraph3D()(elem)
    // .enableNodeDrag(false)
    // .onNodeClick(this.removeNode)
    .graphData(this.initData)
    .nodeLabel('name')
    .nodeId('url')
    .nodeAutoColorBy('type')
    .onNodeClick(node => {
      // Aim at node from outside it
      console.log(node)
      const distance = 40;
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

      this.Graph.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
      );
    });


    console.log(this.Graph.graphData())
    // setInterval(() => {
    //   const { nodes, links } = this.Graph.graphData();
    //   const id = nodes.length;
    //   this.Graph.graphData({
    //     nodes: [...nodes, { id }],
    //     links: [...links, { source: id, target: Math.round(Math.random() * (id-1)) }]
    //   });
    // }, 1000);
  },
  watch:{
    files(){
      const { nodes, links } = this.Graph.graphData();
      for (const f of this.files){
        //  console.log(f)
        //let n = {id: f.url}
        //f.id = f.url
        try{
          this.Graph.graphData({
            nodes: [...nodes, f],
            links: [...links/*, { source: f.parent, target: f.url }*/]
          });
        }
        catch(e){
          console.log(e,f)
        }
      }
    },
    folders(){
      const { nodes, links } = this.Graph.graphData();
      for (const f of this.folders){
        console.log(f)
        // f.id = f.url
        //  let parent = nodes.find(x=> x.id == f.parent)
        //  console.log("parent", parent)

        // if (parent == undefined){
        //   let parent = {id: f.parent, url : f.parent, name: f.parent}
        //   console.log(parent)
        //   this.Graph.graphData({
        //     nodes: [...nodes, parent],
        //  //   links: [...links, { /*source: parent.url, target: f.id*/ }]
        //   });
        // }
        //let n = {id: f.url}
        //  if(f.parent != undefined){

        try{
          this.Graph.graphData({
            nodes: [...nodes, f],
            //links: links
            links: [...links/*, { source: "https://spoggy-test13.solidcommunity.net/", target: f.url }*/]
          });
          //}
          console.log(nodes,links)
        }
        catch(e){
          console.log(e,f)
        }
      }
    }
  }
}
</script>

<style>

</style>
