// var eve = require('evejs');
import Vue from 'vue'
import * as eve from  'evejs/dist/eve.custom.js';

export function SnifferAgent(id) {
  // execute super constructor
  eve.Agent.call(this, id);
  this.count = 0

  // connect to all transports configured by the system
  this.connect(eve.system.transports.getAll());
}

// extend the eve.Agent prototype
SnifferAgent.prototype = Object.create(eve.Agent.prototype);
SnifferAgent.prototype.constructor = SnifferAgent;

SnifferAgent.prototype.sayHello = function(to) {
  this.send(to, 'Hello ' + to + '!');
};

SnifferAgent.prototype.receive = async function(from, message) {
//  console.log(from + ' said: ' + JSON.stringify(message));
  // document.write(from + ' said: ' + JSON.stringify(message) + '<br>');
let resources = await Vue.prototype.$getResources(message.url)
// for (const r of resources){
//   console.log(r)
//   if (r.type == "folder"){
//     r.resources = await Vue.prototype.$getResources(r.url)
//   }
// }
//let resources = await getResources(message)
  //if (message.indexOf('Hello') === 0) {
    // reply to the greeting
    this.send(from, {resources: resources});
  // }else{
  //   if(this.count <10)
  //   {
  //     this.count ++
  //     this.send(from, 'Hi ' + from + 'my count is '+this.count );
  //   }
  // }
};

// async function getResources(r){
//   r.resources = await Vue.prototype.$getResources(r.url)
//   for (const (i, res) in r.resources){
//     let res  = r.resources[i]
//
//     if (res.type == "folder"){
//       console.log(res.url)
//       res.resources = await getResources(res)
//     }
//   }
//   console.log(r)
//   return r
//
// }
