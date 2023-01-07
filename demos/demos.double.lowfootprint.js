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

var Queue = require("../index.js").DoubleEndedLowFootprint;
var queue = new Queue();

queue.enqueue(1);
queue.add(2);
queue.insert(3);
queue.push(4);
queue.enqueue(1);
queue.add(2);
queue.insert(3);
queue.push(5);
console.log(queue.size());
console.log(queue.toArray());

console.log(queue.dequeue());
console.log(queue.shift());
console.log(queue.remove());

console.log(queue.size());
console.log(queue.toArray());
