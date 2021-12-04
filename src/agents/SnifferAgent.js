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

SnifferAgent.prototype.receive = function(from, message) {
  console.log(from + ' said: ' + JSON.stringify(message));
  // document.write(from + ' said: ' + JSON.stringify(message) + '<br>');
Vue.prototype.$getResources(message.url)
  //if (message.indexOf('Hello') === 0) {
    // reply to the greeting
    this.send(from, 'Hi ' + from + ', you send me '+JSON.stringify(message));
  // }else{
  //   if(this.count <10)
  //   {
  //     this.count ++
  //     this.send(from, 'Hi ' + from + 'my count is '+this.count );
  //   }
  // }
};
