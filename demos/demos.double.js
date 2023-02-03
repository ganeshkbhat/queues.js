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

var Queue = require("../index.js").DoubleEnded;


var queue = new Queue();
queue.insertFront(1);
queue.insertFront(2);
queue.insertFront(3);
queue.insertFront(4);
queue.insertFront(5);
queue.insertFront(6);
queue.insertFront(7);
queue.insertFront(8);

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

console.log(queue.deleteLast());
console.log(queue.deleteLast());
console.log(queue.deleteLast());

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());


queue = new Queue();
queue.insertFront(1);
queue.insertFront(2);
queue.insertFront(3);
queue.insertFront(4);
queue.insertFront(5);
queue.insertFront(6);
queue.insertFront(7);
queue.insertFront(8);

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

console.log(queue.deleteFront());
console.log(queue.deleteFront());
console.log(queue.deleteFront());

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());


queue = new Queue();
queue.insertLast(1);
queue.insertLast(2);
queue.insertLast(3);
queue.insertLast(4);
queue.insertLast(5);
queue.insertLast(6);
queue.insertLast(7);
queue.insertLast(8);

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

console.log(queue.deleteLast());
console.log(queue.deleteLast());
console.log(queue.deleteLast());

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());


queue = new Queue();
queue.insertLast(1);
queue.insertLast(2);
queue.insertLast(3);
queue.insertLast(4);
queue.insertLast(5);
queue.insertLast(6);
queue.insertLast(7);
queue.insertLast(8);

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

console.log(queue.deleteFront());
console.log(queue.deleteFront());
console.log(queue.deleteFront());

console.log("queue.size()", queue.size());
console.log("queue.toArray()", queue.toArray());

