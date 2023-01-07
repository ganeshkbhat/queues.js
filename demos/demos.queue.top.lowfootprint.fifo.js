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

var Queue = require("../index.js").QueueLowFootprintFifo;
var fifo = new Queue();

fifo.enqueue(1);
fifo.add(2);
fifo.insert(3);
fifo.push(4);
fifo.enqueue(1);
fifo.add(2);
fifo.insert(3);
fifo.push(5);
console.log(fifo.size());
console.log(fifo.toArray());

console.log(fifo.dequeue());
console.log(fifo.shift());
console.log(fifo.remove());

console.log(fifo.size());
console.log(fifo.toArray());
