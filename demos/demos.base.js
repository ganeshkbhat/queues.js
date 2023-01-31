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

var Queue = require("../index.js").Base;

var queue = new Queue("end", "fifo");

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
queue.push(8);

console.log(queue.size());
console.log(queue.toArray());

console.log("end", "fifo", "shift", queue.shift());
console.log("end", "fifo", "shift", queue.shift());

console.log("end", "fifo", "shift", queue.shift());
console.log("end", "fifo", "shift", queue.shift());

queue.reset("end", "lifo");


queue.type = "end";
queue.method = "lifo";

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.push(5);
// queue.push(6);
// queue.push(7);
// queue.push(8);

console.log("end", "lifo", "pop", queue.pop());
console.log("end", "lifo", "pop", queue.pop());

console.log("end", "lifo", "pop", queue.pop());
console.log("end", "lifo", "pop", queue.pop());

console.log("end", "lifo", "size", queue.size());
console.log("end", "lifo", "toArray", queue.toArray());

queue.reset("front", "lifo");


queue.type = "front";
queue.method = "lifo";

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.push(5);
// queue.push(6);
// queue.push(7);
// queue.push(8);

console.log("front", "lifo", "shift", queue.shift());
console.log("front", "lifo", "shift", queue.shift());

console.log("front", "lifo", "shift", queue.shift());
console.log("front", "lifo", "shift", queue.shift());

console.log("front", "lifo", "size", queue.size());
console.log("front", "lifo", "toArray", queue.toArray());

queue.reset("front", "fifo");

queue.type = "front";
queue.method = "fifo";

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.push(5);
// queue.push(6);
// queue.push(7);
// queue.push(8);

console.log("front", "fifo", "pop", queue.pop());
console.log("front", "fifo", "pop", queue.pop());

console.log("front", "fifo", "pop", queue.pop());
console.log("front", "fifo", "pop", queue.pop());

console.log("front", "fifo", "size", queue.size());
console.log("front", "fifo", "toArray", queue.toArray());

queue.reset();

