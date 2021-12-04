//var HelloAgent = require('./HelloAgent');
// import { HelloAgent } from '@/agents/HelloAgent.js';
var HelloAgent = require('../src/agents/HelloAgent.js');
// create two agents
var agent1 = new HelloAgent('agent1');
var agent2 = new HelloAgent('agent2');
console.log(agent1)

// send a message to agent1
agent2.send('agent1', 'Hello agent1!');
