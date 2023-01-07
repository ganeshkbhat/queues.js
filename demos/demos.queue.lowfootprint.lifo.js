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

var Queue = require("../index.js").QueueLowFootprintLifo;
var lifo = new Queue();

lifo.enqueue(1);
lifo.add(2);
lifo.insert(3);
lifo.push(4);
lifo.enqueue(1);
lifo.add(2);
lifo.insert(3);
lifo.push(5);
console.log(lifo.size());
console.log(lifo.toArray());

console.log(lifo.dequeue());
console.log(lifo.shift());
console.log(lifo.remove());

console.log(lifo.size());
console.log(lifo.toArray());


