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

var Queue = require("../index.js").QueueFifo;
var fifo = new Queue();

fifo.enqueue(1);
fifo.add(2);
fifo.insert(3);
fifo.push(4);
fifo.enqueue(5);
fifo.add(6);
fifo.insert(7);
fifo.push(8);

console.log(".size()", fifo.size());
console.log(".toArray()", fifo.toArray());

console.log(fifo.dequeue());
console.log(fifo.shift());
console.log(fifo.remove());

console.log(".size()", fifo.size());
console.log(".toArray()", fifo.toArray());

