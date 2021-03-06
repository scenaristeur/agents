/**
* Custom agent prototype
* @param {String} id
* @constructor
* @extend eve.Agent
*/
// import Vue from 'vue'
import * as eve from  'evejs/dist/eve.custom.js';

export function AppAgent(id, app) {
  // execute super constructor
  eve.Agent.call(this, id);
  this.app = app;
  // connect to all transports configured by the system
  this.connect(eve.system.transports.getAll());
}

// extend the eve.Agent prototype
AppAgent.prototype = Object.create(eve.Agent.prototype);
AppAgent.prototype.constructor = AppAgent;

/**
* Send a greeting to an agent
* @param {String} to
*/
AppAgent.prototype.sayHello = function(to) {
  this.send(to, 'Hello ' + to + '!');
};

/**
* Handle incoming greetings. This overloads the default receive,
* so we can't use AppAgent.on(pattern, listener) anymore
* @param {String} from     Id of the sender
* @param {*} message       Received message, a JSON object (often a string)
*/
AppAgent.prototype.receive = function(from, message) {
//  console.log("Message",message)
  if (typeof message == String && message.indexOf('Hello') === 0) {
    // reply to the greeting
    this.send(from, 'Hi ' + from + ', nice to meet you!');
    this.app.prop1 = message;
  }else{
  //  console.log(from, "said", message, message.resources != undefined, message.resources.length)

    if (message.resources != undefined && message.resources.length > 0){
      for (const r of message.resources){
        if (r.type == "folder"){
        //  console.log("to sniff", r)
          this.app.$store.commit('app/addFolder',r)
         this.send(from, r)
       }else{
        // console.log("File", r)
         this.app.$store.commit('app/addFile',r)
       }
      }
    }
  }


  // switch(message.type){
  //   case 'visresults':
  //   console.log("visresults", message.visresults);
  //   this.app.updateNetwork(message.visresults);
  //   break;
  //
  //   case 'catchTriplet':
  //   let triplet = message.triplet;
  //   console.log(triplet)
  //   this.app.catchTriplet(triplet);
  //   break;
  //   case 'clear':
  //   this.app.clear();
  //   break;
  //   case 'exportJson':
  //   this.app.exportJson();
  //   break;
  //   case 'exportTtl':
  //   this.app.exportTtl();
  //   break;
  //   case 'decortiqueFile':
  //   this.app.decortiqueFile(message.fichier, message.remplaceNetwork);
  //   break;
  //   case 'newApp':
  //   this.app.newApp();
  //   break;
  //   case 'addToApp':
  //   console.log(message.data)
  //   this.app.addToApp(message.data);
  //   break;
  //   case 'populateVis':
  //   console.log(message.data)
  //   this.app.populateVis(message.data);
  //   break;
  //   case 'importFromParam':
  //   console.log(message.params)
  //   this.app.importFromParam(message.params);
  //   break;
  //   case 'resultsFromExplore':
  //   //  console.log(message.results)
  //   this.app.resultsFromExplore(message.results);
  //   break;
  //   case 'resultsFromSparql':
  //   //  console.log(message.results)
  //   this.app.resultsFromSparql(message.results);
  //   break;
  //   case 'resultsFromPersee':
  //   //  console.log(message.results)
  //   this.app.resultsFromPersee(message);
  //   break;
  //   case 'describeFromDBpedia':
  //   console.log(message.results)
  //   this.app.describeFromDBpedia(message.results, message.resource);
  //   break;
  //   case 'updateNetworkOptions':
  //   console.log(message.repulsion)
  //   this.app.updateNetworkOptions(message.repulsion);
  //   break;
  //   case 'exportJson':
  //   console.log(message.type)
  //   this.app.exportJson();
  //   break;
  //   case 'askNetworkOptions':
  //   console.log(this.app.network.physics.options.repulsion)
  //   this.app.agentApp.send('agentReglagesApp', {type:'initOptions', repulsion : this.app.network.physics.options.repulsion});
  //   break;
  //   case 'resetNetworkOptions':
  //   this.app.resetNetworkOptions();
  //   console.log(this.app.network.physics.options.repulsion)
  //   this.app.agentApp.send('agentReglagesApp', {type:'initOptions', repulsion : this.app.network.physics.options.repulsion});
  //   break;
  //   case 'exportTtl':
  //   console.log('exportTtl')
  //   this.exportTtl();
  //
  //   break;
  //
  //   default:
  //   console.log(message);
  // }
};
