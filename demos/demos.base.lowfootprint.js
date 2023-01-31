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

var Queue = require("../index.js").BaseLowFootprint;

var queue = new Queue("end", "fifo");

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
queue.push(8);

console.log("end", "fifo", queue.size());
console.log("end", "fifo", queue.toArray());

console.log("end", "fifo", queue.shift());
console.log("end", "fifo", queue.shift());
console.log("end", "fifo", queue.shift());
console.log("end", "fifo", queue.shift());

console.log("end", "fifo", queue.size());
console.log("end", "fifo", queue.toArray());

queue = new Queue("end", "lifo");

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
queue.push(8);

console.log("end", "lifo", queue.size());
console.log("end", "lifo", queue.toArray());

console.log("end", "lifo", queue.pop());
console.log("end", "lifo", queue.pop());
console.log("end", "lifo", queue.pop());
console.log("end", "lifo", queue.pop());

console.log("end", "lifo", queue.size());
console.log("end", "lifo", queue.toArray());

queue = new Queue("front", "fifo");

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
queue.push(8);

console.log("front", "fifo", "queue.size()", queue.size());
console.log("front", "fifo", "queue.toArray()", queue.toArray());

console.log("front", "fifo", queue.pop());
console.log("front", "fifo", queue.pop());
console.log("front", "fifo", queue.pop());
console.log("front", "fifo", queue.pop());

console.log("front", "fifo", "queue.size()", queue.size());
console.log("front", "fifo", "queue.toArray()", queue.toArray());

queue = new Queue("front", "lifo");

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
queue.push(8);

console.log("front", "lifo", "queue.size()",  queue.size());
console.log("front", "lifo", "queue.toArray()", queue.toArray());

console.log("front", "lifo", queue.shift());
console.log("front", "lifo", queue.shift());
console.log("front", "lifo", queue.shift());
console.log("front", "lifo", queue.shift());

console.log("front", "lifo", "queue.size()", queue.size());
console.log("front", "lifo", "queue.toArray()", queue.toArray());

