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
