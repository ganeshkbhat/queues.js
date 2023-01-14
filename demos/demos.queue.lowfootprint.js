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

var Queue = require("../index.js").QueueLowFootprint;
var queue = new Queue();

// LIFO

queue.lifo.enqueue(1);
queue.lifo.add(2);
queue.lifo.insert(3);
queue.lifo.push(4);
queue.lifo.enqueue(5);
queue.lifo.add(6);
queue.lifo.insert(7);
queue.lifo.push(8);


console.log(".size()", queue.lifo.size());
console.log(".toArray()", queue.lifo.toArray());


console.log(queue.lifo.dequeue());
console.log(queue.lifo.pop());
console.log(queue.lifo.remove());

console.log(".size()", queue.lifo.size());
console.log(".toArray()", queue.lifo.toArray());

queue.lifo.clear();


// FIFO

queue.fifo.enqueue(1);
queue.fifo.add(2);
queue.fifo.insert(3);
queue.fifo.push(4);
queue.fifo.enqueue(5);
queue.fifo.add(6);
queue.fifo.insert(7);
queue.fifo.push(8);


console.log(".size()", queue.fifo.size());
console.log(".toArray()", queue.fifo.toArray());


console.log(queue.fifo.dequeue());
console.log(queue.fifo.shift());
console.log(queue.fifo.remove());


console.log(".size()", queue.fifo.size());
console.log(".toArray()", queue.fifo.toArray());

