/**
 * 
 * Package: scale.concurrency
 * Author: Ganesh B
 * Description: 
 * Install: npm i scale.concurrency --save
 * Github: https://github.com/ganeshkbhat/scale.concurrency
 * npmjs Link: https://www.npmjs.com/package/scale.concurrency
 * File: .js
 * File Description: .js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var Queue = require("../index.js").StackLowFootprint;
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
