/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: 
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: .js
 * File Description: .js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var Queue = require("../index.js").Stack;
var stack = new Queue();

stack.enqueue(1);
stack.add(2);
stack.insert(3);
stack.push(4);
stack.enqueue(1);
stack.add(2);
stack.insert(3);
stack.push(5);
console.log(stack.size());
console.log(stack.toArray());

console.log(stack.dequeue());
console.log(stack.shift());
console.log(stack.remove());

console.log(stack.size());
console.log(stack.toArray());
