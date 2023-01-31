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

var Queue = require("../index.js").DoubleEndedLowFootprint;
var queue = new Queue("end", "lifo");

queue.enqueue(1);
queue.add(2);
queue.insert(3);
queue.push(4);
queue.enqueue(5);
queue.add(6);
queue.insert(7);
queue.push(8);

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

console.log(queue.dequeue());
console.log(queue.pop());
console.log(queue.remove());

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

queue = new Queue("end", "fifo");

queue.enqueue(1);
queue.add(2);
queue.insert(3);
queue.push(4);
queue.enqueue(5);
queue.add(6);
queue.insert(7);
queue.push(8);

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

console.log(queue.dequeue());
console.log(queue.shift());
console.log(queue.remove());

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

queue = new Queue("front", "fifo");

queue.enqueue(1);
queue.add(2);
queue.insert(3);
queue.push(4);
queue.enqueue(5);
queue.add(6);
queue.insert(7);
queue.push(8);

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

console.log(queue.dequeue());
console.log(queue.pop());
console.log(queue.remove());

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

queue = new Queue("front", "lifo");

queue.enqueue(1);
queue.add(2);
queue.insert(3);
queue.push(4);
queue.enqueue(5);
queue.add(6);
queue.insert(7);
queue.push(8);

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

console.log(queue.dequeue());
console.log(queue.shift());
console.log(queue.remove());

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

